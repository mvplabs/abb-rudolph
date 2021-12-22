import {Link} from "react-router-dom";

export default function Services(props) {
  let data = props.services;
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
       <h1 className="text-4xl text-gray-700 ml-8 mb-4">Services</h1>
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="w-24 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Authority
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((service, serviceIdx) => (
                  <tr key={service.id} className={serviceIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    
                    <td className="px-6 py-4  whitespace-nowrap text-sm font-medium text-gray-900">{service.title.slice(0,100)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.authority}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to="/implement" state={{ parentId: service.id }} className="text-indigo-600 hover:text-indigo-900">
                        Implement
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      </main>
  );
}