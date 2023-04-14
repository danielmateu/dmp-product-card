# DMP-Product-Card

Este es un paquete de pruebas de despliege en NPM

### Daniel Mateu Pardo

## Ejemplo

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from 'dmp-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, handleAdd, isMaxCountReached, maxCount }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```