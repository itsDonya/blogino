import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  return () => router.back();
};
