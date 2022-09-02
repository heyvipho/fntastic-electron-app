import toastr from "toastr";

toastr.options.positionClass = 'toast-bottom-right'

const error = (desc, heading = null) => {
  toastr.error(desc, heading)
}

const info = (desc, heading = null) => {
  toastr.info(desc, heading)
}

export default { error, info }
