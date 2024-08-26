import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { DesignDevelopmentList } from "./designDevelopment/DesignDevelopmentList";
import { DesignDevelopmentCreate } from "./designDevelopment/DesignDevelopmentCreate";
import { DesignDevelopmentEdit } from "./designDevelopment/DesignDevelopmentEdit";
import { DesignDevelopmentShow } from "./designDevelopment/DesignDevelopmentShow";
import { UserAccountList } from "./userAccount/UserAccountList";
import { UserAccountCreate } from "./userAccount/UserAccountCreate";
import { UserAccountEdit } from "./userAccount/UserAccountEdit";
import { UserAccountShow } from "./userAccount/UserAccountShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ProductionList } from "./production/ProductionList";
import { ProductionCreate } from "./production/ProductionCreate";
import { ProductionEdit } from "./production/ProductionEdit";
import { ProductionShow } from "./production/ProductionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FashionTradeBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="DesignDevelopment"
          list={DesignDevelopmentList}
          edit={DesignDevelopmentEdit}
          create={DesignDevelopmentCreate}
          show={DesignDevelopmentShow}
        />
        <Resource
          name="UserAccount"
          list={UserAccountList}
          edit={UserAccountEdit}
          create={UserAccountCreate}
          show={UserAccountShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Production"
          list={ProductionList}
          edit={ProductionEdit}
          create={ProductionCreate}
          show={ProductionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
