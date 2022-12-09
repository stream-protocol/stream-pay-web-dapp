import Link from "next/link";

export default function Footer() {
  const STREAM_PAY = "stream_pay_eth";
  const STREAM_PROTOCOL_LINK = `https://twitter.com/${stream_protocol}`;
  const STREAM_PAY_LINK = "https://web3.streampayment.app/";
  return (
    <footer className="flex justify-center md:justify-between p-5 font-base text-sm opacity-70">
      <div className="flex text-white text-sm">
        <Link href="/policy" className="mr-3">
          <p>Privacy policy</p>
        </Link>
        <Link href="/terms" className="mr-3">
          <p>Terms & conditions</p>
        </Link>
        <Link href="/about" className="mr-3">
          <p>About</p>
        </Link>
      </div>
      <div className="hidden md:block">
        <p className="text-white">
          © 2022 {" "}
          <a
            className="font-semibold hover:underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
            href={STREAM_PROTOCOL_LINK}
          >
            Stream Protocol {"  "}
          </a>
          &{" "}
          <a
            className="font-semibold hover:underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
            href={STREAM_PAY_LINK}
          >
            StreamPay
          </a>
        </p>
      </div>
    </footer>
  );
}
