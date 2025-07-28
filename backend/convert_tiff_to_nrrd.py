import nrrd
import tifffile
import SimpleITK as sitk
import pyvips
import openslide
import os

def convert_tiff_to_dzi_using_openslide(tiff_path, dzi_path):
    

    slide_path = tiff_path  # Replace with your file path
    output_dir = dzi_path  # Replace with your desired output directory

    oslide_image = openslide.open_slide(slide_path)
    os.makedirs(output_dir, exist_ok=True)

    # Assuming you want to use the default Deep Zoom configuration
    # You can customize the configuration as needed
    #oslide_image.write_dzi(output_dir)
    oslide_image.save(output_dir)

def convert_tiff_to_dzi(tiff_path, dzi_path):
    """
    Convert a TIFF image to DZI format.
    This function uses the tifffile library to read the TIFF image and then writes it in DZI format.
    """
    # Read the TIFF image
     
    image = pyvips.Image.new_from_file(tiff_path)
    # image = image.colourspace('srgb')
    # image.flatten(background=[255, 255, 255])
    # image.copy(interpretation="srgb")
    image.dzsave(dzi_path)


def get_nrrd_header_from_tiff_data(tiff_data):
    print(f"in get_nrrd_header_from_tiff_data:  data.dtype={tiff_data.dtype}, data.dtype.str[1:]={tiff_data.dtype.str[1:]}")
    # Initialize NRRD header
    header = {
        'dimension': tiff_data.ndim,
        'sizes': list(tiff_data.shape),
        'type': str(tiff_data.dtype), #'uint16', #nrrd.format_dtype(tiff_data.dtype),
        'encoding': 'raw'  # Explicitly set encoding to 'raw' for no compression
    }

    # Example: Adding a custom key-value pair to the header
    header['modality'] = 'TIFF to NRRD Conversion'

    # Add more fields based on your extracted TIFF metadata and NRRD needs
    # For instance, if you have resolution information:
    # nrrd_header['space directions'] =  [(x_resolution, 0, 0), (0, y_resolution, 0), (0, 0, z_resolution)]
    # nrrd_header['space units'] = ["mm", "mm", "mm"]

    return header

def convert_tiff_to_nrrd_using_sitk(tiff_path, nrrd_path):
    # Read the TIFF image
    # If you have a stack of TIFFs representing a 3D volume, 
    # SimpleITK can often read them as a single 3D image if they are named sequentially and consistently.
    # Otherwise, you might need to read them individually and stack them into a 3D SimpleITK image.
    tiff_image = sitk.ReadImage(tiff_path)
    tiff_data = sitk.GetArrayFromImage(tiff_image)
    print(f"""in convert_tiff_to_nrrd_using_sitk: 
          tiff_image type={type(tiff_image)},
          tiff_data type={type(tiff_data)}, 
          tiff_data shape={tiff_data.shape}""")
    # nrrd_header = get_nrrd_header_from_tiff_data(tiff_data)
    # sitk.WriteImage(tiff_image, nrrd_path)
    sitk.WriteImage(tiff_image, nrrd_path, True)  # True to write as NRRD format


def convert_tiff_to_nrrd_using_sitk_v2(tiff_path, nrrd_path):

    reader = sitk.ImageFileReader()
    reader.SetImageIO("TIFFImageIO")
    reader.SetFileName(tiff_path)
    image = reader.Execute()

    writer = sitk.ImageFileWriter()
    writer.SetImageIO("NrrdImageIO")
    writer.SetFileName(nrrd_path)
    # tiff_data = sitk.GetArrayFromImage(image)
    # nrrd_header = get_nrrd_header_from_tiff_data(tiff_data)
    writer.SetUseCompression(False)  # Set to True if you want compression
    writer.Execute(image)


def convert_tiff_to_nrrd_using_nrrd(tiff_path, nrrd_path):
    image_data = tifffile.imread(tiff_path)
    print(f"in convert_tiff_to_nrrd_using_nrrd: image_data.shape={image_data.shape}, type={type(image_data)}")
    add_header = False
    if add_header:
        nrrd_header = get_nrrd_header_from_tiff_data(image_data)
        nrrd.write(nrrd_path, image_data, header=nrrd_header, compression_level=0) 
    else:
         # compression_level=0 for no compression
        nrrd.write(nrrd_path, image_data) 


if __name__ == "__main__":
    folder = './frontend/static/microscopy/'
    tiff_file = f"{folder}/microscopy_TEAD1.tif"
    convert_tiff_to_nrrd_using_sitk(tiff_file, f"{folder}/microscopy_TEAD1_sitk.nrrd")   # BAD
    convert_tiff_to_nrrd_using_sitk_v2(tiff_file, f"{folder}/microscopy_TEAD1_sitk_v2.nrrd")   # GOOD  
    convert_tiff_to_nrrd_using_nrrd(tiff_file, f"{folder}/microscopy_TEAD1_nrrd.nrrd") # GOOD
    # convert_tiff_to_dzi_using_openslide(tiff_file, f"{folder}/microscopy_TEAD1_openslide")
