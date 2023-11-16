/* eslint-disable max-lines-per-function */
import { ReactElement, useEffect } from 'react'
import { AddCarFormProps } from '../util/types'
import Button from './Button'
export default function AddCarForm({
  register,
  errors,
  handleSubmit,
  handleAdd,
  handleCancel,
  divStyles,
  inputStyles,
  isLoading,
  setIsLoading,
}: AddCarFormProps): ReactElement {
  useEffect(() => {
    if (errors.name?.type === 'required' || errors.name?.type === 'namePattern') {
      setIsLoading(false)
    }
  }, [errors.name, setIsLoading])

  return (
    <form className="flex flex-col gap-2 md:gap-4">
      <div className={divStyles}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className={inputStyles}
          id="name"
          placeholder="e.g. Moni Car"
          {...register('name', {
            required: true,
            validate: { namePattern: name => !/^[^a-zA-Z0-9]/g.test(name) },
          })}
        />
        {errors.name?.type === 'required' && (
          <small className="ml-5 text-sm text-warning-50">Car name is required!</small>
        )}
        {errors.name?.type === 'namePattern' && (
          <small className="ml-5 text-sm text-warning-50">this is an eror</small>
        )}
      </div>
      <div className={divStyles}>
        <label htmlFor="type">Type</label>
        <select className={inputStyles} id="type" {...register('carTypeId', { required: true })}>
          <option value={1}>Moni Cooper</option>
          <option value={2}>Moni Electric</option>
          <option value={3}>Moni Countryman</option>
        </select>
      </div>
      <section className="flex gap-2 text-lg text-secondary-50 md:text-xl">
        <div className="w-1/2">
          <label htmlFor="license">License Plate</label>
          <input
            type="text"
            className={inputStyles}
            id="license"
            placeholder="e.g. M-XY 123"
            {...register('plate', {
              required: true,
              validate: {
                platePattern: plate => /^[A-Z]{1}-([A-Z]){2}\s(\d){3,}/g.test(plate as string),
              },
            })}
          />
          {errors.plate?.type === 'required' && (
            <small className="ml-5 text-sm text-warning-50">License plate is required!</small>
          )}
          {errors.plate?.type === 'platePattern' && (
            <small className="ml-5 text-sm text-warning-50">Follow this format: M-XY 123</small>
          )}
        </div>
        <div className="w-1/2">
          <label htmlFor="horsepower">Horse Power</label>
          <input
            type="number"
            className={inputStyles}
            id="horsepower"
            {...register('horsepower', { required: true })}
          />
          {errors.horsepower?.type === 'required' && (
            <small className="ml-5 text-sm text-warning-50">Horse power is required!</small>
          )}
        </div>
      </section>
      <div className={divStyles}>
        <label htmlFor="fuel">Fuel Type</label>
        <select className={inputStyles} id="fuel" {...register('fuelType', { required: true })}>
          <option value="diesel">diesel</option>
          <option value="electric">electric</option>
          <option value="petrol">petrol</option>
        </select>
      </div>
      <div className={divStyles}>
        <label htmlFor="info">Additional Information</label>
        <input
          type="text"
          className={inputStyles}
          id="info"
          placeholder="e.g. No smoking"
          {...register('info')}
        />
      </div>
      <div className="mt-4 flex gap-4 md:mt-8">
        <Button
          buttonType="reset"
          variant="secondary"
          text="Cancel"
          isLoading={isLoading}
          clickHandler={handleCancel}
        />
        <Button
          text="Add Car"
          buttonType="submit"
          isLoading={isLoading}
          clickHandler={handleSubmit(handleAdd)}
        />
      </div>
    </form>
  )
}
