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
      const response = await axios.get(`/services/?page=<span class="math-inline">\{page\}&search\=</span>{search}`);
      setServices(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Failed to fetch services", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/services/?page=${page}&search=${search}`);
            setServices(response.data.results);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error("Error fetching services:", error);
            // Add error handling, e.g., show an error message to the user
        } finally {
            setLoading(false);
        }
    };

    fetchServices();
}, [page, search]);  // Include search in the dependency array

const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);  // Reset page to 1 when search query changes
};

return (
  <div>
      <h1>Service Listing</h1>
      <div className="mb-3">
          <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={search}
              onChange={handleSearchChange}
          />
      </div>
      {loading ? (
          <Loader />
      ) : (
          <>
              <div className="row">
                  {services.map((service) => (
                      <div key={service.id} className="col-md-4 mb-4">
                          <ServiceCard service={service} />
                      </div>
                  ))}
              </div>
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </>
      )}
  </div>
);
};

export default ServiceListingPage;