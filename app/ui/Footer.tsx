import { cinzel, cinzelDecorative } from "./fonts";

const Footer = () => {
  return (
    <section className="mt-4">
      <div className={`${cinzel.className} flex flex-col justify-center text-center gap-2 mb-10`}>
        <h1 className="text-xl">PHOTOGRAPHER</h1>
        <h1
          className={`text-primary text-3xl`}
        >
          <span className={cinzelDecorative.className}>T</span>ICHAONA {' '}
          <span className={cinzelDecorative.className}>m</span>UKURUNYOROVA
        </h1>
      </div>
      <footer className="w-full text-center py-5 font-thin border-t border-primary">
        <p>2023 ©Tichaona Mukurunyorova Photography. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;
