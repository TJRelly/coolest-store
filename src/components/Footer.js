export default function Footer() {
  const date = new Date()
  return (
    <footer className="border-t border-gray-100 py-10 text-center">
      <p className="text-sm text-gray-500">
        © {date.getFullYear} CoolestStore. All rights reserved.
      </p>
    </footer>
  )
}
