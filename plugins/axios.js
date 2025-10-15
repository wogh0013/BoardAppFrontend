import axios from "axios";

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: "http://localhost:8080", // ✅ Spring Boot 서버 주소
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
