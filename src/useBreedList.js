import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status]; // results?.data?.breeds ?? [] -> if resutls is there check for data if data is there is check for breed and so on if any error or anything give me empty arrary(that's why ?? is there ?? [])
}
