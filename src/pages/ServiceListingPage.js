import React, { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "../components/ServiceCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import "./../styles/ServiceListingPage.css";

const ServiceListingPage = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchServices = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/services/?page=${page}&search=${search}`);
      setServices(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Failed to fetch services", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(currentPage);
  }, [currentPage, search]);

  return (
    <div className="service-listing-container">
      <h2>Available Services</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => fetchServices(1)}>Search</button>
      </div>
      {loading && <Loader />}
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ServiceListingPage;
