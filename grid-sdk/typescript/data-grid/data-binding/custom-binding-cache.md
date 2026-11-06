---
layout: post
title: Cache mode in custom binding in TypeScript Grid control | Syncfusion
description: Learn how to enable cache mode in custom binding in the Syncfusion TypeScript Grid to reuse fetched pages and avoid redundant server requests.
platform: grid-sdk
control: Cache mode in custom binding
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cache mode in custom binding in TypeScript Grid control

The Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Grid supports **cache mode** while binding data through a custom service. With custom binding, your application owns the request and response contract, and the Grid requests the data through the [dataStateChange](../../api/grid#datastatechange) event. Enabling cache mode makes the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) retain the pages that were already fetched, so returning to a page that was visited earlier is served from the cache instead of issuing another request to your service.

This removes redundant round trips while browsing a large data set, which improves the response time and lowers the load on your back end.

## Enabling cache mode

Cache mode is controlled by the `enableCache` property of the [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager). When it is set to **true**, the DataManager generates a unique identifier during initialization and uses it to store the fetched pages.

To enable cache mode in a custom binding scenario:

1. Create a [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) instance with the `enableCache` property set to **true**.
2. Bind the DataManager instance to the [dataSource](../../api/grid#datasource) property of the Grid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/custom-binding-cache/app.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/custom-binding-cache/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/custom-binding-cache" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-binding-cache/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/custom-binding-cache/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/custom-binding-cache" %}
{% endif %}

## How the cache works

The cache stores one entry for every distinct query that the Grid executes. A query is identified by the service URL together with the sorting, grouping, searching, filtering, and paging values that are part of it. Because the paging value is part of that identity, each page is cached separately.

When the Grid navigates to a page that is already available in the cache, the DataManager returns the stored result and the request is not sent again. The cached entry also holds the record count that was returned by your service, so the pager continues to reflect the total number of records.

The cache is cleared automatically when the data state changes because of sorting, filtering, grouping, searching, or a CRUD operation. After such an action, the Grid requests the data again so that the result always matches the current query.

## Limiting the number of cached pages

By default, every visited page is retained in the cache. To keep only a fixed number of pages, use the `cachingPageSize` property together with the `enableCaching` property. See [Cache count limit in custom binding](custom-binding-cache-limit) for details.

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
