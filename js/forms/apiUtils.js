/**
 * API Utils Module
 * This module provides utility functions for fetching data from APIs.
 */

/**
 * Fetches data from a given URL.
 */

import { isEmpty } from "../utils.js";

/**
 * Sends a GET request to a given URL with an ID provided.
 */
export async function fetchData(url, data) {
  if (isEmpty(url)) {
    console.error("Error: the url is empty.");
    return;
  }
  if (isEmpty(data)) {
    console.error("Error: the data is empty.");
    return;
  }
  const fullUrl = `${url}/${data}`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      console.error(`HTTP Error Status: ${response.status}`);
      return;
    }

    return response;
  } catch (error) {
    console.error(`Error sending POST request to ${url}: ${error}.`);
  }
}

/**
 * Fetches JSON data from a given URL.
 */
export async function fetchJSONData(jsonUrl) {
  if (isEmpty(jsonUrl)) {
    console.error("Error: The json url is empty.");
    return;
  }

  try {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
      console.error(`HTTP Error Status: ${response.status}`);
      return;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(`Error parsing JSON data from ${jsonUrl}: ${error}.`);
  }
}

/**
 * Sends a POST request to a given URL with the provided data.
 */
export async function postData(url, data) {
  if (isEmpty(url)) {
    console.error("Error: the url is empty.");
    return;
  }
  if (isEmpty(data)) {
    console.error("Error: the data is empty.");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/type",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`HTTP Error Status: ${response.status}`);
      return;
    }

    return response;
  } catch (error) {
    console.error(`Error sending POST request to ${url}: ${error}.`);
  }
}

export async function putData(url, data) {}
export async function deleteData(url, data) {}
