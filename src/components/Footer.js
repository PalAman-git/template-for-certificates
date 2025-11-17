export default function Footer() {
  return (
    <footer className="text-center py-6 bg-white border-t mt-10">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} DocGen. All rights reserved.
      </p>
    </footer>
  );
}
