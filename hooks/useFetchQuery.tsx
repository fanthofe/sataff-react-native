import { useQuery } from "@tanstack/react-query";

export function useFetchQuery(url: string) {
    return useQuery({
        queryKey: [url],
        queryFn: async () => {

        }
    });
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000))
}