import LidForm from "./LidForm";

const Footer = () => {
  return (
    <footer className="bg-sky-800 w-full flex flex-col items-center justify-center py-20 px-5 text-center text-white font-heebo">
      <h2 className="text-4xl font-bold leading-relaxed mb-6">
        השאירו פרטים כאן
        <br />
        ונתאים לכם את שירות המשלוחים הטוב ביותר עבורכם!
      </h2>
      <LidForm />
    </footer>
  );
};

export default Footer;
