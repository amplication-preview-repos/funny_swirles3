import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DESIGNDEVELOPMENT_TITLE_FIELD } from "./DesignDevelopmentTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const DesignDevelopmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Production"
          target="designDevelopmentId"
          label="Productions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="designDevelopment"
              source="designdevelopment.id"
              reference="DesignDevelopment"
            >
              <TextField source={DESIGNDEVELOPMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
