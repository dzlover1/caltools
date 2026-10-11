export const onRequest = ({ request, next }) => {
  const url = new URL(request.url);

  if (url.hostname === 'www.caltools.eu.org') {
    url.hostname = 'caltools.eu.org';
    return Response.redirect(url.toString(), 301);
  }

  return next();
};
