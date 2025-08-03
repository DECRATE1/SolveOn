import { useSearchParams } from "react-router";

export default function SecondPage() {
  const [params, setParams] = useSearchParams();
  const type = params.get("hello");
  return <a href="/">{`welcome back ${type}`}</a>;
}
