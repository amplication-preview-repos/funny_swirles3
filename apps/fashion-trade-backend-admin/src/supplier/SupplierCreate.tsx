import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DesignDevelopmentTitle } from "../designDevelopment/DesignDevelopmentTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="designDevelopments"
          reference="DesignDevelopment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DesignDevelopmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
