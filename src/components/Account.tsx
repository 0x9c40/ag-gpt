import { Fragment, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Menu>
        <div className="group relative mr-2">
          <Menu.Button as={Fragment}>
            <button className="flex w-full items-center rounded-lg p-2 hover:bg-slate-100">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 text-white">
                Y
              </div>

              <span className="font-bold">My Account</span>
            </button>
          </Menu.Button>

          <Menu.Items className="absolute bottom-full left-0 z-20 mb-1 w-full translate-y-0 overflow-hidden rounded-lg border border-gray-100 bg-white pb-1.5 pt-1 opacity-100 outline-none dark:border-gray-800 dark:bg-gray-900">
            <Menu.Item>
              <a
                className="flex min-h-[44px] cursor-pointer items-center gap-3 bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-white"
                id="headlessui-menu-item-:re4:"
                role="menuitem"
                tabIndex={-1}
                data-headlessui-state="active"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-md"
                >
                  <path
                    d="M11.4284 2.39822C11.7719 2.15891 12.2281 2.15891 12.5716 2.39822L15.0347 4.11412C15.1532 4.19667 15.2882 4.25257 15.4303 4.27799L18.3853 4.80632C18.7974 4.88 19.12 5.2026 19.1937 5.61471L19.722 8.56969C19.7474 8.71185 19.8033 8.84682 19.8859 8.96531L21.6018 11.4284C21.8411 11.7719 21.8411 12.2281 21.6018 12.5716L19.8859 15.0347C19.8033 15.1532 19.7474 15.2882 19.722 15.4303L19.1937 18.3853C19.12 18.7974 18.7974 19.12 18.3853 19.1937L15.4303 19.722C15.2881 19.7474 15.1532 19.8033 15.0347 19.8859L12.5716 21.6018C12.2281 21.8411 11.7719 21.8411 11.4284 21.6018L8.96531 19.8859C8.84682 19.8033 8.71185 19.7474 8.56969 19.722L5.61471 19.1937C5.2026 19.12 4.88 18.7974 4.80632 18.3853L4.27799 15.4303C4.25257 15.2881 4.19667 15.1532 4.11412 15.0347L2.39822 12.5716C2.15891 12.2281 2.15891 11.7719 2.39822 11.4284L4.11412 8.96531C4.19667 8.84682 4.25257 8.71185 4.27799 8.56969L4.80632 5.61471C4.88 5.2026 5.2026 4.88 5.61471 4.80632L8.56969 4.27799C8.71185 4.25257 8.84682 4.19667 8.96531 4.11412L11.4284 2.39822Z"
                    stroke="currentColor"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M11.5876 8.10179C11.7862 7.81201 12.2138 7.81201 12.4124 8.10179L13.4865 9.66899C13.5515 9.76386 13.6473 9.83341 13.7576 9.86593L15.58 10.4031C15.9169 10.5025 16.0491 10.9092 15.8349 11.1876L14.6763 12.6934C14.6061 12.7846 14.5696 12.8971 14.5727 13.0121L14.625 14.9113C14.6346 15.2625 14.2886 15.5138 13.9576 15.3961L12.1675 14.7596C12.0592 14.721 11.9408 14.721 11.8325 14.7596L10.0424 15.3961C9.71135 15.5138 9.36537 15.2625 9.37502 14.9113L9.42726 13.0121C9.43042 12.8971 9.39385 12.7846 9.32372 12.6934L8.16514 11.1876C7.9509 10.9092 8.08306 10.5025 8.42003 10.4031L10.2424 9.86593C10.3527 9.83341 10.4485 9.76386 10.5135 9.66899L11.5876 8.10179Z"
                    fill="currentColor"
                  ></path>
                </svg>
                My plan
              </a>
            </Menu.Item>

            <Menu.Item>
              <a
                className="flex min-h-[44px] cursor-pointer items-center gap-3 bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-white"
                id="headlessui-menu-item-:rfb:"
                role="menuitem"
                tabIndex={-1}
                data-headlessui-state="active"
                onClick={openModal}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-md"
                >
                  <path
                    d="M11.6439 3C10.9352 3 10.2794 3.37508 9.92002 3.98596L9.49644 4.70605C8.96184 5.61487 7.98938 6.17632 6.93501 6.18489L6.09967 6.19168C5.39096 6.19744 4.73823 6.57783 4.38386 7.19161L4.02776 7.80841C3.67339 8.42219 3.67032 9.17767 4.01969 9.7943L4.43151 10.5212C4.95127 11.4386 4.95127 12.5615 4.43151 13.4788L4.01969 14.2057C3.67032 14.8224 3.67339 15.5778 4.02776 16.1916L4.38386 16.8084C4.73823 17.4222 5.39096 17.8026 6.09966 17.8083L6.93502 17.8151C7.98939 17.8237 8.96185 18.3851 9.49645 19.294L9.92002 20.014C10.2794 20.6249 10.9352 21 11.6439 21H12.3561C13.0648 21 13.7206 20.6249 14.08 20.014L14.5035 19.294C15.0381 18.3851 16.0106 17.8237 17.065 17.8151L17.9004 17.8083C18.6091 17.8026 19.2618 17.4222 19.6162 16.8084L19.9723 16.1916C20.3267 15.5778 20.3298 14.8224 19.9804 14.2057L19.5686 13.4788C19.0488 12.5615 19.0488 11.4386 19.5686 10.5212L19.9804 9.7943C20.3298 9.17767 20.3267 8.42219 19.9723 7.80841L19.6162 7.19161C19.2618 6.57783 18.6091 6.19744 17.9004 6.19168L17.065 6.18489C16.0106 6.17632 15.0382 5.61487 14.5036 4.70605L14.08 3.98596C13.7206 3.37508 13.0648 3 12.3561 3H11.6439Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                </svg>
                Settings &amp; Beta
              </a>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Settings
                  </Dialog.Title>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
