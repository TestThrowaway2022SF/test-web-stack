import React, {SyntheticEvent, useState} from "react";
import { useForm } from "react-hook-form";

import { EditUserProps } from "./index.d";

import FormField from "components/molecules/FormField";
import AddressMap from "components/molecules/AddressMap";

import { UserModelUpdate } from "model/UserModel";

import {
  StyledEditUserWrapper,
  StyledEditUserHeader,
  StyledEditUserContent,
  StyledEditUserMapContainer,
  StyledEditUserFormContainer, StyledEditUserFormButtons, StyledEditUserFormFields
} from "./style";

import { StyledTextInput } from "components/atoms/TextInput/style";
import { StyledButton } from "components/atoms/Button/style";
import { ButtonType } from "components/atoms/Button/index.d";



const EditUser = (props: EditUserProps) => {
  const { user, onSubmit, onCancel } = props;

  const [address, setAddress] = useState(user?.address);

  const handleChangeAddress = (event: SyntheticEvent) => {
    const newAddress = (event.target as HTMLInputElement).value;
    if (address !== newAddress) {
      setAddress(newAddress);
    }
  };

  const handleSave = (data: UserModelUpdate) => {
    onSubmit(user.id, data);
  };

  const handleCancel = () => {
    onCancel();
  };

  const { register, handleSubmit, formState: { errors } } = useForm<UserModelUpdate>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: user?.name,
      address: user?.address,
      description: user?.description
    }
  });

  return (
    <StyledEditUserWrapper>
      <StyledEditUserHeader>
        Edit user
      </StyledEditUserHeader>
      <StyledEditUserContent>
        <StyledEditUserMapContainer>
          <AddressMap address={address} />
        </StyledEditUserMapContainer>
        <StyledEditUserFormContainer>
          <form
            onSubmit={handleSubmit(handleSave)}
            data-testid="user_form"
          >
            <StyledEditUserFormFields>
              <FormField
                name="name"
                label="Name"
                error={errors?.name?.message}
              >
                <StyledTextInput
                  id="name"
                  data-testid="user_field_name"
                  hasError={!!errors?.name}
                  {...register('name', {
                    required: 'Please enter a name'
                  })}
                />
              </FormField>
              <FormField
                name="address"
                label="Address"
                error={errors?.address?.message}
              >
                <StyledTextInput
                  id="address"
                  data-testid="user_field_address"
                  hasError={!!errors?.address}
                  {...register('address', {
                    required: 'Please enter an address',
                    onBlur: (event) => handleChangeAddress(event)
                  })}
                />
              </FormField>
              <FormField
                name="description"
                label="Description"
                error={errors?.description?.message}
              >
                <StyledTextInput
                  id="description"
                  data-testid="user_field_description"
                  hasError={!!errors?.description}
                  {...register('description')}
                />
              </FormField>
            </StyledEditUserFormFields>

            <StyledEditUserFormButtons>
              <StyledButton
                type="submit"
                data-testid="user_submit_button"
              >
                Submit
              </StyledButton>

              <StyledButton type="button"
                onClick={handleCancel}
                buttonType={ButtonType.Secondary}
                data-testid="user_cancel_button"
              >
                Cancel
              </StyledButton>
            </StyledEditUserFormButtons>
          </form>
        </StyledEditUserFormContainer>
      </StyledEditUserContent>
    </StyledEditUserWrapper>
  );
};


export default EditUser;
