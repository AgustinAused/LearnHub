"use client";
import React, { useState, useEffect } from "react";
import CardCourse from "@/components/cards/CardCourse";
import GetServices from "@/actions/GetServicios";
import LoadMoreButton from "../Button";
import MultiFilterSearch from "@/components/filter/FilterSearch";
import { useRouter } from "next/navigation";

export default function CourseList() {
  const router = useRouter();
  const [listCourse, setListCourse] = useState([]);
  const [filters, setFilters] = useState({});
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (filters) => {
    setFilters(filters);
    setPages(1); // Reset pages when filters change
    router.refresh();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          pages,
          limit: 8,
          filters: JSON.stringify(filters),
        });

        const response = await fetch(
          `http://localhost:4050/api/services/allServices?${queryParams}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // If it's the first page, set the new data directly
        // Otherwise, concatenate the new data with the existing list
        setListCourse((prevList) =>
          pages === 1 ? data.docs : [...prevList, ...data.docs]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pages, filters]);

  const handleLoadMore = () => {
    // Increment the page to load more courses
    setPages((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center lg:items-start ">
        <MultiFilterSearch onSearch={handleSearch} />
        <div className="m-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {listCourse.map((course) => (
            <CardCourse key={course._id} course={course} />
          ))}
        <LoadMoreButton loadMore={handleLoadMore} />
        </div>
      </div>
    </div>
  );
}
