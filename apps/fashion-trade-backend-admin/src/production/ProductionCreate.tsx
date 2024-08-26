import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DesignDevelopmentTitle } from "../designDevelopment/DesignDevelopmentTitle";

export const ProductionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="designDevelopment.id"
          reference="DesignDevelopment"
          label="designDevelopment"
        >
          <SelectInput optionText={DesignDevelopmentTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
