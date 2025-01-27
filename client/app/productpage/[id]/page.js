"use client";

import axios from "axios";
import { endpoints } from "@/app/api/config";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./productPage.scss";

const productPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoints.products}/:${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN_API}`,
          },
        });
        setProduct(response.data.data);
        console.log(response);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // if (loading) return <h1>ЗАГРУЗКА</h1>;

  return <h1>Product ID: </h1>;
};

export default productPage;
