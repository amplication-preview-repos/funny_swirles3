import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DesignDevelopmentTitle } from "../designDevelopment/DesignDevelopmentTitle";

export const ProductionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
