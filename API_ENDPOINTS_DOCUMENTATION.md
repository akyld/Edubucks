# School Finder API - Frontend Integration Guide

This document provides comprehensive documentation for the two main endpoints your frontend application will use to integrate with the School Finder backend.

## Table of Contents

1. [Provider Resolution](#provider-resolution)
2. [GET /api/config](#get-apiconfig)
3. [POST /api/schools/filter](#post-apischoolsfilter)
4. [Error Handling](#error-handling)
5. [Complete Integration Example](#complete-integration-example)

---

## Provider Resolution

**IMPORTANT**: All endpoints require a provider to be specified. The system supports multi-tenancy, so every request must include a provider identifier.

### Provider Resolution Order

The system resolves the provider in this order:

1. **X-Provider-Code header** (recommended for production)
2. **provider query parameter** (useful for testing)
3. **Host header** (if configured)

### Examples

```javascript
// Recommended: Using header
fetch("/api/config", {
  headers: {
    "X-Provider-Code": "edubucks",
  },
});

// Alternative: Using query parameter
// localhost:3040?provider=edubucks  yeni repo
// localhost:7040/api/config?provider=edubucks  istek

fetch("/api/config?provider=edubucks");
```

---

## GET /api/config

**Purpose**: Retrieves provider configuration and available filter definitions for the UI.

### Request

```http
GET /api/config?provider=edubucks
```

**Headers:**

- use query parameter: `?provider=edubucks`

### Response Structure

```json
{
  "providerCode": "edubucks",
  "providerName": "EduBucks School Finder",
  "themeColors": "#4F46E5,#10B981,#F59E0B",
  "logoUrl": "https://example.com/logo.png",
  "availableFilters": [
    {
      "filterKey": "COUNTRY",
      "displayName": "Country",
      "position": 1,
      "filterType": "MULTI_SELECT",
      "filterDataType": "STRING",
      "values": [
        {
          "valueKey": "UK",
          "displayValue": "United Kingdom"
        },
        {
          "valueKey": "USA",
          "displayValue": "United States"
        },
        {
          "valueKey": "CAN",
          "displayValue": "Canada"
        }
      ]
    },
    {
      "filterKey": "RESIDENCE_TYPE",
      "displayName": "Residence Type",
      "position": 2,
      "filterType": "MULTI_SELECT",
      "filterDataType": "STRING",
      "values": [
        {
          "valueKey": "BOARDING",
          "displayValue": "Boarding"
        },
        {
          "valueKey": "DAY",
          "displayValue": "Day"
        }
      ]
    },
    {
      "filterKey": "PRICE",
      "displayName": "Annual Tuition",
      "position": 3,
      "filterType": "RANGE_INPUT",
      "filterDataType": "LONG",
      "values": []
    },
    {
      "filterKey": "RANKING",
      "displayName": "School Ranking",
      "position": 4,
      "filterType": "RANGE_INPUT",
      "filterDataType": "LONG",
      "values": []
    },
    {
      "filterKey": "SPORTS",
      "displayName": "Available Sports",
      "position": 5,
      "filterType": "MULTI_SELECT",
      "filterDataType": "STRING",
      "values": [
        {
          "valueKey": "FOOTBALL",
          "displayValue": "Football"
        },
        {
          "valueKey": "BASKETBALL",
          "displayValue": "Basketball"
        },
        {
          "valueKey": "TENNIS",
          "displayValue": "Tennis"
        }
      ]
    }
  ]
}
```

### Response Field Descriptions

- **providerCode**: Unique identifier for the provider/tenant
- **providerName**: Display name of the provider
- **themeColors**: Three hex color codes separated by commas (e.g., "#4F46E5,#10B981,#F59E0B")
  - First color: Primary theme color
  - Second color: Secondary theme color
  - Third color: Accent theme color
- **logoUrl**: URL to the provider's logo image
- **availableFilters**: Array of filter definitions available for this provider

### Filter Types Explained

- **MULTI_SELECT**: User can select multiple values from a predefined list
- **RANGE_INPUT**: User can specify min/max values for numeric filters
- **SINGLE_SELECT**: User can select one value from a predefined list

### Filter Data Types

- **STRING**: Text values (countries, sports, etc.)
- **LONG**: Numeric values (prices, rankings, etc.)

---

## POST /api/schools/filter

**Purpose**: Filters schools based on user-selected criteria. This is the main endpoint for the school search functionality.

### Request

```http
POST /api/schools/filter?page=0&size=10&sort=name
Content-Type: application/json
```

**Query Parameters:**

- `page` (optional): Page number, default 0
- `size` (optional): Page size, default 20
- `sort` (optional): Sort field, default "name"

**Request Body:**

```json
{
  "filters": {
    "COUNTRY": {
      "values": ["UK", "USA"]
    },
    "RESIDENCE_TYPE": {
      "values": ["BOARDING"]
    },
    "PRICE": {
      "minValue": 30000,
      "maxValue": 60000
    },
    "RANKING": {
      "maxValue": 10
    },
    "SPORTS": {
      "values": ["FOOTBALL", "TENNIS"]
    }
  }
}
```

### Filter Criteria Structure

#### For STRING filters (MULTI_SELECT):

```json
"COUNTRY": {
  "values": ["UK", "USA", "CAN"]
}
```

#### For LONG filters (RANGE_INPUT):

```json
"PRICE": {
  "minValue": 30000,    // Optional: minimum value (inclusive)
  "maxValue": 60000     // Optional: maximum value (inclusive)
}
```

#### For LONG filters with single constraint:

```json
"RANKING": {
  "maxValue": 10        // Only schools with ranking <= 10
}
```

### Response Structure

```json
{
  "content": [
    {
      "id": 1,
      "name": "Eton College",
      "description": "A prestigious boarding school in the UK",
      "imageUrl": "https://example.com/eton.jpg",
      "filterValues": {
        "COUNTRY": "UK",
        "RESIDENCE_TYPE": "BOARDING",
        "PRICE": 46000,
        "RANKING": 5,
        "SPORTS": ["FOOTBALL", "CRICKET", "RUGBY"]
      }
    },
    {
      "id": 2,
      "name": "Harvard-Westlake School",
      "description": "Elite private school in Los Angeles",
      "imageUrl": "https://example.com/harvard-westlake.jpg",
      "filterValues": {
        "COUNTRY": "USA",
        "RESIDENCE_TYPE": "DAY",
        "PRICE": 45000,
        "RANKING": 8,
        "SPORTS": ["BASKETBALL", "TENNIS", "SWIMMING"]
      }
    }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageNumber": 0,
    "pageSize": 20,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 2,
  "totalPages": 1,
  "last": true,
  "first": true,
  "numberOfElements": 2,
  "size": 20,
  "number": 0,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "empty": false
}
```

### Filter Values in Response

The `filterValues` object contains the actual filter data for each school:

- **Single values**: `"COUNTRY": "UK"`
- **Multiple values**: `"SPORTS": ["FOOTBALL", "CRICKET", "RUGBY"]`
- **Numeric values**: `"PRICE": 46000`

---

## Error Handling

### Common Error Responses

#### Missing Provider (400 Bad Request)

```json
{
  "error": "MISSING_PROVIDER",
  "message": "Provider is required for this operation"
}
```

#### Provider Not Found (404 Not Found)

```json
{
  "error": "PROVIDER_NOT_FOUND",
  "message": "Provider not found: invalidprovider"
}
```

#### Invalid Request Body (400 Bad Request)

```json
{
  "error": "VALIDATION_ERROR",
  "message": "Request validation failed",
  "details": [
    {
      "field": "filters",
      "message": "Filters cannot be null"
    }
  ]
}
```

---

## Complete Integration Example

Here's a complete example of how to integrate both endpoints in your frontend:

### 1. Load Provider Configuration

```javascript
async function loadProviderConfig(providerCode) {
  try {
    const response = await fetch(`/api/config?provider=${providerCode}`, {
      headers: {
        "X-Provider-Code": providerCode,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const config = await response.json();

    // Apply theme colors (3 hex colors separated by commas)
    const colors = config.themeColors.split(",");
    document.documentElement.style.setProperty("--primary-color", colors[0]);
    document.documentElement.style.setProperty("--secondary-color", colors[1]);
    document.documentElement.style.setProperty("--accent-color", colors[2]);

    // Build filter UI
    buildFilterUI(config.availableFilters);

    return config;
  } catch (error) {
    console.error("Failed to load provider config:", error);
    throw error;
  }
}
```

### 2. Build Filter UI

```javascript
function buildFilterUI(filters) {
  const filterContainer = document.getElementById("filters");

  filters.forEach((filter) => {
    const filterElement = createFilterElement(filter);
    filterContainer.appendChild(filterElement);
  });
}

function createFilterElement(filter) {
  const div = document.createElement("div");
  div.className = "filter-group";

  const label = document.createElement("label");
  label.textContent = filter.displayName;
  div.appendChild(label);

  if (filter.filterType === "MULTI_SELECT") {
    const select = document.createElement("select");
    select.multiple = true;
    select.name = filter.filterKey;

    filter.values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value.valueKey;
      option.textContent = value.displayValue;
      select.appendChild(option);
    });

    div.appendChild(select);
  } else if (filter.filterType === "RANGE_INPUT") {
    const minInput = document.createElement("input");
    minInput.type = "number";
    minInput.name = `${filter.filterKey}_min`;
    minInput.placeholder = "Min";

    const maxInput = document.createElement("input");
    maxInput.type = "number";
    maxInput.name = `${filter.filterKey}_max`;
    maxInput.placeholder = "Max";

    div.appendChild(minInput);
    div.appendChild(maxInput);
  }

  return div;
}
```

### 3. Search Schools

```javascript
async function searchSchools(providerCode, filters, page = 0, size = 20) {
  try {
    const requestBody = {
      filters: {},
    };

    // Convert form data to API format
    Object.keys(filters).forEach((filterKey) => {
      const filter = filters[filterKey];

      if (filter.type === "MULTI_SELECT" && filter.values.length > 0) {
        requestBody.filters[filterKey] = {
          values: filter.values,
        };
      } else if (filter.type === "RANGE_INPUT") {
        const criteria = {};
        if (filter.minValue !== null && filter.minValue !== "") {
          criteria.minValue = parseInt(filter.minValue);
        }
        if (filter.maxValue !== null && filter.maxValue !== "") {
          criteria.maxValue = parseInt(filter.maxValue);
        }

        if (Object.keys(criteria).length > 0) {
          requestBody.filters[filterKey] = criteria;
        }
      }
    });

    const response = await fetch(
      `/api/schools/filter?provider=${providerCode}&page=${page}&size=${size}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Provider-Code": providerCode,
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    displaySchools(result.content);
    updatePagination(result);

    return result;
  } catch (error) {
    console.error("Failed to search schools:", error);
    throw error;
  }
}
```

### 4. Display Results

```javascript
function displaySchools(schools) {
  const container = document.getElementById("schools-container");
  container.innerHTML = "";

  schools.forEach((school) => {
    const schoolCard = createSchoolCard(school);
    container.appendChild(schoolCard);
  });
}

function createSchoolCard(school) {
  const card = document.createElement("div");
  card.className = "school-card";

  card.innerHTML = `
    <img src="${school.imageUrl}" alt="${school.name}" class="school-image">
    <div class="school-info">
      <h3>${school.name}</h3>
      <p>${school.description}</p>
      <div class="school-details">
        <span class="country">${school.filterValues.COUNTRY}</span>
        <span class="price">$${school.filterValues.PRICE?.toLocaleString()}/year</span>
        <span class="ranking">Ranking: ${school.filterValues.RANKING}</span>
      </div>
    </div>
  `;

  return card;
}
```

### 5. Complete Usage Example

```javascript
// Initialize the application
async function initApp() {
  const providerCode = "edubucks";

  try {
    // Load provider configuration
    const config = await loadProviderConfig(providerCode);
    console.log("Provider config loaded:", config);

    // Set up search form
    document
      .getElementById("search-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const filters = extractFiltersFromForm(formData);

        await searchSchools(providerCode, filters);
      });
  } catch (error) {
    console.error("Failed to initialize app:", error);
    // Show error message to user
  }
}

// Start the application
initApp();
```

---

## Summary

1. **GET /api/config**: Use this to load provider configuration and available filters for building your UI
2. **POST /api/schools/filter**: Use this to search for schools based on user-selected criteria
3. **Provider Resolution**: Always include the provider code via header or query parameter
4. **Error Handling**: Implement proper error handling for missing providers and validation errors
5. **Pagination**: The filter endpoint supports pagination for large result sets

The API is designed to be flexible and supports various filter types (multi-select, range inputs) with proper pagination and error handling.

3040
