import SimpleITK as sitk

# Read TIFF image
tiff_image = sitk.ReadImage('./frontend/static/microscopy/microscopy_TEAD1.tif')
print(tiff_image)

# Save as NRRD
# sitk.WriteImage(tiff_image, './frontend/static/microscopy/microscopy_TEAD1.nrrd')