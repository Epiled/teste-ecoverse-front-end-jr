import axios from "axios";
import { useEffect, useState } from "react";

const http = import.meta.env.VITE_API_URL;

const localization = import.meta.env.MODE === 'development'
  ? 'http://localhost:3000/' // JSON Server
  : 'https://api-ecoverse.vercel.app/api/'; // API de produção

console.log(import.meta.env.MODE, localization);

const useFetch = <T>({ url }: { url: string; }) => {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`${http}${url}`)
      .then(resposta => {
        setDados(resposta.data.products || resposta.data); // Define dados com base no que é retornado
      })
      .catch(erro => {
        setErro(erro);
      })
    }
    fetchData();
  }, [url]);


  return { dados, erro }
}

export default useFetch;
