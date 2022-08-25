import React from 'react';
import Table, { SelectColumnFilter, StatusPill } from './Table';
import { useForm } from 'react-hook-form';


const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 27,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Inactive',
      role: 'Owner',
      age: 43,
      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      role: 'Member',
      age: 32,
      imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Offline',
      role: 'Member',
      age: 29,
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Inactive',
      role: 'Admin',
      age: 36,
      imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      role: 'Member',
      age: 24,
      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];
  return [...data, ...data, ...data];
};

function handleAuctionSubmit(event) {
  event.preventDefault();
  const data = new FormData();

  data.append('post[title]', event.target.title.value);
  data.append('post[description]', event.target.description.value);
  data.append('post[end_date]', event.target.end_date.value);
  data.append('post[image]', event.target.image.files[0]);
  
  reset();
}

export default function AddAuctionForm() {
  const columns = React.useMemo(() => [
    {
      Header: 'Leilão',
      accessor: 'title',
    },
    {
      Header: 'Encerra em',
      accessor: 'end_date',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: StatusPill,
      Filter: SelectColumnFilter, // new
      filter: 'includes',
    },
  ], []);
  const data = React.useMemo(() => getData(), []);

  const { reset } = useForm();


  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Adicione um leilão</h3>
              <p className="mt-1 text-sm text-gray-600">
                Tenha certeza de preencher todas as informações corretamente e adicionar uma imagem.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={(e) => handleAuctionSubmit(e)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Produto
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Descrição
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Descrição do produto"
                        defaultValue=""
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Breve descrição do produto.
                    </p>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      Encerrar leilão em:
                    </label>
                    <input
                      type="datetime-local"
                      name="end_date"
                      id="end_date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Imagem</label>
                    <div className="mt-1 flex items-center">
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Fazer Upload
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Imagem do leilão</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="image" name="image" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Adicionar Leilão
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="">
            <h1 className="text-xl font-semibold">Todos os leilões</h1>
          </div>
          <div className="mt-6">
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
