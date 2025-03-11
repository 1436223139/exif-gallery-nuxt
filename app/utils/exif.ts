import exifr from 'exifr'

async function getImageAspectRatio(file: File) {
  return createImageBitmap(file).then((bitmap) => {
    const aspectRatio = bitmap.width / bitmap.height
    bitmap.close()
    return aspectRatio
  }).catch(() => {
    return undefined
  })
}

export async function getExifData(file: File) {
  let photo: IPhoto = {}

  // 解析EXIF元数据
  const exifData = await exifr.parse(file)

  photo = {
    make: exifData?.Make,
    model: exifData?.Model,
    focalLength: exifData?.FocalLength,
    focalLengthIn35mmFormat: exifData?.FocalLengthIn35mmFormat,
    lensMake: exifData?.LensMake,
    lensModel: exifData?.LensModel,
    fNumber: exifData?.FNumber,
    iso: exifData?.ISO,
    exposureTime: exifData?.ExposureTime,
    exposureCompensation: exifData?.ExposureCompensation,
    locationName: exifData?.Location,
    latitude: exifData?.Latitude,
    longitude: exifData?.Longitude,
    takenAt: exifData?.DateTimeOriginal,
  }

  photo.aspectRatio = await getImageAspectRatio(file)

  return photo
}
