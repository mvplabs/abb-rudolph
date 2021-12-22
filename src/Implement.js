import React, { useState } from 'react';
import { useLocation } from 'react-router';

export default function Implement(props) {
  const [selectedService, setSelectedService] = useState(null)

  let services = props.services;
  let location = useLocation();
  let parentServiceId = null;
  
  if(selectedService === null && location.state !== null) {
    parentServiceId = location.state.parentId;
    setSelectedService(services.find(service => service.id === parentServiceId));
  }

  console.log("Parent service: " + parentServiceId);
  console.log("Selected service: " + selectedService?.title);

  let description = selectedService?.description;
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Base service
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                The regional service that serves as base for this implementation
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Service
                      </label>
                        <select
                          id="location"
                          name="location"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          onChange={(e) => {
                            console.log("Select!");
                            console.log(e.target.value);
                            setSelectedService(services.find(service => service.id === e.target.value))
                          }}
                        >
                          {selectedService !== null && <option key={selectedService.id} value={selectedService.id}>{selectedService.title}</option>}
                          {services.map((service, serviceIdx) => (
                           
                            <option key={service.id} value={service.id}>{service.title}</option>
                          ))}
                        </select>
                      </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Detail
                    </label>
                    <div className="mt-1">
                      { 
                        description
                      }
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of the selected service.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </main>
  );
}
