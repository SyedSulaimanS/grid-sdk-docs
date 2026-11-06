---
layout: post
title: Cache count limit in custom binding in TypeScript Grid control | Syncfusion
description: Learn how to limit the number of cached pages in custom binding in the Syncfusion TypeScript Grid to control browser storage usage.
platform: grid-sdk
control: Cache count limit in custom binding
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cache count limit in custom binding in TypeScript Grid control

When cache mode is enabled in a custom binding scenario, the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) keeps every page that was fetched in the browser storage. For a large data set that is browsed extensively, this can grow without a bound. The **cache count limit** lets you retain only a fixed number of pages, so the most recently visited pages stay available and the older ones are discarded.

Use the `cachingPageSize` property of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) together with the `enableCaching` property to apply this limit.

## Limiting the cache count

To limit the number of cached pages in a custom binding scenario:

1. Create a [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) instance with the `enableCaching` property set to **true**.
2. Set the `cachingPageSize` property to the number of pages that should be retained in the cache.
3. Bind the DataManager instance to the [dataSource](../../api/grid#datasource) property of the Grid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/custom-binding-cache-limit/app.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/custom-binding-cache-limit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/custom-binding-cache-limit" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-binding-cache-limit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-binding-cache-limit/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/custom-binding-cache-limit" %}
{% endif %}

## How the limit works

The `cachingPageSize` property defines the maximum number of pages that are retained in the cache. Whenever a new page is fetched and the cache already holds the configured number of pages, the oldest entry is removed to make room for the new one. The cache therefore always contains the most recently visited pages.

A page that is still within the limit is served from the cache when it is revisited, so no request is sent to your service. A page that was already discarded is requested again, because its data is no longer available in the cache.

The following table shows how the cached pages behave when `cachingPageSize` is set to **3** and the Grid visits the pages in the given order.

| Action | Cached pages | Request sent |
|--------|--------------|--------------|
| Visit page 1 | Page 1 | Yes |
| Visit page 2 | Page 1, Page 2 | Yes |
| Visit page 3 | Page 1, Page 2, Page 3 | Yes |
| Visit page 4 | Page 2, Page 3, Page 4 | Yes |
| Revisit page 2 | Page 2, Page 3, Page 4 | No |
| Revisit page 1 | Page 3, Page 4, Page 1 | Yes |

## Supported combinations

### Works With

* Paging, sorting, filtering, grouping, and searching.
* All adaptors supported by the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager).

### Known limitations

* The cache is cleared whenever sorting, filtering, grouping, searching, or a CRUD operation is performed, so those actions always trigger a new request.
* The cached entries are held in the browser storage, and therefore they are removed when the browser storage is cleared.

## Related APIs

* [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager)
* [Cache in EJ2 TypeScript DataManager](https://ej2.syncfusion.com/documentation/data/cache)
* [dataSource](https://ej2.syncfusion.com/documentation/api/grid/#datasource)
* [dataStateChange](https://ej2.syncfusion.com/documentation/api/grid/#datastatechange)
