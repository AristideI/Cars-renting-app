import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactElement } from 'react'
import { apiUrl } from '../util/apiUrl'
import { DialogProps } from '../util/types'
import Button from './Button'
export default function MyDialog({
  isDialogOpen,
  deleteId,
  setIsDialogOpen,
}: DialogProps): ReactElement {
  async function handleDelete(id: number) {
    setIsDialogOpen(false)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${apiUrl}/cars/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response) {
        window.location.reload()
      }
    } catch (error) {
      return error
    }
  }

  return (
    <Transition appear show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsDialogOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 " />
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
              <Dialog.Panel className="flex w-full max-w-md flex-col items-center justify-between  gap-4 overflow-hidden rounded-2xl bg-secondary-50 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Are you sure you want to delete your car?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-center text-sm text-gray-500">
                    If you delete this car it will be deleted permanently. This action cannot be
                    undone.
                  </p>
                </div>

                <div className="flex w-full scale-75 gap-6">
                  <Button
                    text="No, Cancel!"
                    clickHandler={() => setIsDialogOpen(false)}
                    variant="secondary"
                  />
                  <Button
                    text="Got it, delete"
                    clickHandler={async () => await handleDelete(deleteId)}
                    variant="warning"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
