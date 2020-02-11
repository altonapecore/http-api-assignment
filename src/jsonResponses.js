const respond = (request, response, status, object, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(object);
  response.end();
};


const success = (request, response, acceptedTypes) => {
  const message = {
    message: 'This is a successful response',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  return respond(request, response, 200, messageString, 'application/json');
};

const badRequest = (request, response, params, acceptedTypes) => {
  const message = {
    message: 'This request has the required parameters.',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.valid || params.valid !== 'true') {
    // set our error message
    message.message = 'Missing valid query parameter set to true.';
    // give the error a consistent id
    message.id = 'badRequest';

    if (acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with message tag.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${message.message}</message>`;
      responseXML = `${responseXML} <id>${message.id}</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, 400, responseXML, 'text/xml');
    }

    const messageString = JSON.stringify(message);

    // return our json with a 400 bad request code
    return respond(request, response, 400, messageString, 'application/json');
  }

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  // if the parameter is here, send json with a success status code
  return respond(request, response, 200, messageString, 'application/json');
};

const unauthorized = (request, response, params, acceptedTypes) => {
  const message = {
    message: 'This request has the required parameters.',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.loggedIn || params.loggedIn !== 'true') {
    // set our error message
    message.message = 'Missing loggedIn query parameter set to true.';
    // give the error a consistent id
    message.id = 'unauthorized';

    if (acceptedTypes[0] === 'text/xml') {
      // create a valid XML string with message tag.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${message.message}</message>`;
      responseXML = `${responseXML} <id>${message.id}</id>`;
      responseXML = `${responseXML} </response>`;

      // return response passing out string and content type
      return respond(request, response, 401, responseXML, 'text/xml');
    }

    const messageString = JSON.stringify(message);

    // return our json with a 400 bad request code
    return respond(request, response, 401, messageString, 'application/json');
  }

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  // if the parameter is here, send json with a success status code
  return respond(request, response, 200, messageString, 'application/json');
};

const forbidden = (request, response, acceptedTypes) => {
  const message = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} <id>${message.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 403, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  return respond(request, response, 403, messageString, 'application/json');
};

const internal = (request, response, acceptedTypes) => {
  const message = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} <id>${message.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 500, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  return respond(request, response, 500, messageString, 'application/json');
};

const notImplemented = (request, response, acceptedTypes) => {
  const message = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} <id>${message.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 501, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  return respond(request, response, 501, messageString, 'application/json');
};

const notFound = (request, response, acceptedTypes) => {
  const message = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string with message tag.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${message.message}</message>`;
    responseXML = `${responseXML} <id>${message.id}</id>`;
    responseXML = `${responseXML} </response>`;

    // return response passing out string and content type
    return respond(request, response, 404, responseXML, 'text/xml');
  }

  const messageString = JSON.stringify(message);

  // return our json with a 404 not found error code
  return respond(request, response, 404, messageString, 'application/json');
};

module.exports = {
  success,
  badRequest,
  notFound,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
};
