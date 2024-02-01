import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  {
    id: 1,
    name: 'Dieuleveut Ngele',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQHzL4J7dLeBUA/profile-displayphoto-shrink_200_200/0/1692197823184?e=1712188800&v=beta&t=kjNcSNf4iA4XzpJV5-vRkX-RzB0bDwg13glpUI4-2f8',
  },
  {
    id: 2,
    name: 'Samar Mamba',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb561b88048.jpg'
  },
  {
    id: 3,
    name: 'Junior Asosa',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb56c319bc6.png',
  },
  {
    id: 4,
    name: 'Dan Mwamba',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb55d016d53.jpg',
  },
  {
    id: 5,
    name: 'Didier Dipondo',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb566c16337.jpg',
  },
  {
    id: 6,
    name: 'Chadrack Mbala',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb54eb6cfd2.jpg',
  },
  {
    id: 7,
    name: 'Joe Kangoma',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.220.138-65bb5520160bc.jpg',
  },
  {
    id: 8,
    name: 'Joseph Basambombo',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.220.138-65bb549a16056.jpg',
  },
  {
    id: 9,
    name: 'Déborah mbwayumu',
    avatar:
      'https://ca.slack-edge.com/T011KUB7Y3Y-U05695H9P5W-b00c1a51495c-512',
  },
  {
    id: 10,
    name: 'Richard Rafiki',
    avatar:
      'https://www.hebergeur-image.com/upload/169.159.212.138-65bb55714aa06.png',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectAvatar() {
  const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium mt-6 leading-6 text-gray-900">Profile</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-7 w-7 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-7 w-7 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

