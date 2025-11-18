import Link from "next/link";

export default function Home() {
  return (

    <div className="max-w-3xl mx-auto text-center py-10">
      

    

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Generate Certificates Instantly
      </h1>

      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Create legally formatted certificates like Gap Certificate, Domicile Certificate, 
        Income Certificate, EWS Certificate, and even Resumes — all in minutes.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        
        <Link
          href="/gap-certificate"
          className="p-6 bg-white shadow rounded-lg hover:shadow-md transition text-left"
        >
          <h2 className="font-semibold text-lg">Gap Certificate →</h2>
          <p className="text-sm text-gray-500 mt-1">
            Generate a professional Gap Certificate PDF instantly.
          </p>
        </Link>

        <Link
          href="/domicile-certificate"
          className="p-6 bg-white shadow rounded-lg hover:shadow-md transition text-left"
        >
          <h2 className="font-semibold text-lg">Domicile Certificate →</h2>
          <p className="text-sm text-gray-500 mt-1">
            Auto-format your Domicile Certificate in PDF format.
          </p>
        </Link>

        <Link
          href="/income-certificate"
          className="p-6 bg-white shadow rounded-lg hover:shadow-md transition text-left"
        >
          <h2 className="font-semibold text-lg">Income Certificate →</h2>
          <p className="text-sm text-gray-500 mt-1">
            Simple form, instant professional output.
          </p>
        </Link>

        <Link
          href="/ews-certificate"
          className="p-6 bg-white shadow rounded-lg hover:shadow-md transition text-left"
        >
          <h2 className="font-semibold text-lg">EWS Certificate →</h2>
          <p className="text-sm text-gray-500 mt-1">
            Auto-generate EWS Certificate based on your details.
          </p>
        </Link>

        <Link
          href="/resume-builder"
          className="p-6 bg-white shadow rounded-lg hover:shadow-md transition text-left sm:col-span-2"
        >
          <h2 className="font-semibold text-lg">Resume Builder →</h2>
          <p className="text-sm text-gray-500 mt-1">
            Create a clean, professional resume PDF instantly.
          </p>
        </Link>

      </div>

      <p className="text-gray-400 text-xs mt-12">
        This website is in early beta. More features will be added soon.
      </p>
    </div>
  );
}
