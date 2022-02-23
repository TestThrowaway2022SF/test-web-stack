import React from 'react';

import {
  fireEvent,
  render,
  screen, waitFor,
} from '@testing-library/react';

import EditUser from "./index";

import UserModel from "model/UserModel";


const initialTestUser: UserModel = {
  id: 'test_user_id',
  name: 'Old Name',
  dob: new Date().toISOString(),
  address: 'Old Address',
  description: 'Old Description',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

const handleSubmitStub = () => {};
const handleCancelStub = () => {};

const NEW_NAME = 'New Name';
const NEW_ADDR = 'New Address';
const NEW_DESC = 'New Description';

test('returns the correct data from a valid form',async () => {
  const handleSubmit = jest.fn();

  render(
    <EditUser
      user={initialTestUser}
      onSubmit={handleSubmit}
      onCancel={handleCancelStub}
    />
  );

  const fieldName = screen.getByTestId('user_field_name');
  fireEvent.change(fieldName, { target: { value: NEW_NAME } });

  const fieldAddress = screen.getByTestId('user_field_address');
  fireEvent.change(fieldAddress, { target: { value: NEW_ADDR } });

  const fieldDescription = screen.getByTestId('user_field_description');
  fireEvent.change(fieldDescription, { target: { value: NEW_DESC } });

  const userForm = screen.getByTestId('user_form');
  fireEvent.submit(userForm);

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith(initialTestUser.id, {
      name: NEW_NAME,
      address: NEW_ADDR,
      description: NEW_DESC
    });
  });
});


test('prevents an invalid form from being saved', async () => {
  const handleSubmit = jest.fn();

  render(
    <EditUser
      user={initialTestUser}
      onSubmit={handleSubmit}
      onCancel={handleCancelStub}
    />
  );

  const fieldName = screen.getByTestId('user_field_name');
  fireEvent.change(fieldName, { target: { value: '' } });

  const userForm = screen.getByTestId('user_form');
  fireEvent.submit(userForm);

  const errorMessage = screen.getByTestId(`form-field-error-name`);
  await waitFor(() => {
    expect(errorMessage).not.toBeEmptyDOMElement();
  })
});

test('cancels the editing when requested', async () => {
  const handleCancel = jest.fn();

  render(
    <EditUser
      user={initialTestUser}
      onSubmit={handleSubmitStub}
      onCancel={handleCancel}
    />
  );

  const cancelButton = screen.getByTestId('user_cancel_button');
  fireEvent.click(cancelButton);

  await waitFor(() => {
    expect(handleCancel).toHaveBeenCalled();
  });
});
