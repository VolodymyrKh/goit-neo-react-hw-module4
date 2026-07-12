import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { fetchImages } from "../../services/unsplashApi";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

const PER_PAGE = 12;

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMoreRef = useRef(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchImages(query, page, PER_PAGE);

        if (data.results.length === 0 && page === 1) {
          toast.error("No images found for your request. Try another one!");
        }

        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
        toast.error("Something went wrong. Please try again!");
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  useEffect(() => {
    if (page > 1 && loadMoreRef.current) {
      loadMoreRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [images, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const hasImages = images.length > 0;
  const showLoadMore = hasImages && page < totalPages && !isLoading;

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      <main className={css.main}>
        {isError && !hasImages && <ErrorMessage />}

        {hasImages && (
          <ImageGallery images={images} onImageClick={openModal} />
        )}

        {isLoading && <Loader />}

        {showLoadMore && (
          <LoadMoreBtn ref={loadMoreRef} onClick={handleLoadMore} />
        )}
      </main>

      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
