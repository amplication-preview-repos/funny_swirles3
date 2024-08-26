import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DesignDevelopmentTitle } from "../designDevelopment/DesignDevelopmentTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
