import { IResourceItem } from "../../../interfaces/bindings/resource";

/**
 * Remove all properties that are non-serializable from a resource object.
 */
export const sanitizeResource = (
  resource?: Partial<IResourceItem> &
    Required<Pick<IResourceItem, "name">> & { children?: unknown },
):
  | (Partial<IResourceItem> & Required<Pick<IResourceItem, "name">>)
  | undefined => {
  if (!resource) {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    icon,
    list,
    edit,
    create,
    show,
    clone,
    children,
    meta,
    options,
    ...restResource
  } = resource;

  const { icon: _metaIcon, ...restMeta } = meta ?? {};
  const { icon: _optionsIcon, ...restOptions } = options ?? {};

  return {
    ...restResource,
    ...(meta ? { meta: restMeta } : {}),
    ...(options ? { options: restOptions } : {}),
  };
};
