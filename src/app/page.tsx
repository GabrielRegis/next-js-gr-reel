import { Inter } from "next/font/google";
import HomePage from "./home/page";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = (props) => (
  <HomePage />
);

export default Home;

