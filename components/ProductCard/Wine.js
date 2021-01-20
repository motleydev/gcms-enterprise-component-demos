import {
  CommerceLayer,
  OrderContainer,
  ItemContainer,
} from "@commercelayer/react-components";

import useAuthToken from "../../hooks/useAuthToken";

const Wine = ({ children, sku }) => {
  const { token } = useAuthToken();
  return token ? (
    <CommerceLayer
      accessToken={token}
      endpoint="https://acme-wine.commercelayer.io"
    >
      <OrderContainer persistKey="demo-wine-product-card">
        <ItemContainer skuCode={sku}>{children}</ItemContainer>
      </OrderContainer>
    </CommerceLayer>
  ) : (
    <p>Loading...</p>
  );
};

export default Wine;
