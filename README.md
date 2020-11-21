# All the code is done during the hackathon's period!

# Sachnha.com

Sachnha.com is an AI-based real-estate platform for housing buyers and sellers.

## Installation
Create an environment to run the backend of the app.
Use [anaconda](https://www.anaconda.com/) to create a virtual environment. 

```bash
conda create --name sachnha python=3.5
conda activate sachnha
```
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install.

```bash
pip install -r requirements.txt
```

## Feature

## Using AI to verify and filter customer's information on the real-estate platform Sachnha.com

### Feature 1: Detect if the upload house images have furniture or not, then verify with the provided information

#### Step 1: Detecting objects based on a pretrained model
* Use ImageAI library
* Use pretrained Yolov3 model 

![file1_OD](https://user-images.githubusercontent.com/69978820/99877037-a0d48500-2bfb-11eb-8a76-23225b4b7fd4.png)

#### Step 2: Extracting names of furniture
![file2_OD2](https://user-images.githubusercontent.com/69978820/99877040-a3cf7580-2bfb-11eb-9cc3-2117eac2a581.png)

### Feature 2: Detecting and verifying the adress based on the street-side image

#### Step 1: Using Custom trained AI model to detect street banner, signboard, address plate from image
* Using YOLO deep learning object detection architecture
* Training custom model on the pre-trained YOLO model
   
   Collecting image data which contains street banners, signboards, address plates
   
   Labelling images and drawing bounding boxes using the LabelImg tool
   
   Training the model on the train set
   
   Applied the trained to new dataset
   
![file3_bcc](https://user-images.githubusercontent.com/69978820/99877041-a4680c00-2bfb-11eb-9500-ce8ac3ab13b8.png)

#### Step 2: Using Optical Character Recognition (OCR) to detect address information
* Cropping the detected banners/signboards/address plates from images
* Using Tesseract OCR to detect street names/home number
![file4_bcc2](https://user-images.githubusercontent.com/69978820/99877042-a500a280-2bfb-11eb-89cd-5fccea29f205.png)

### Feature 3: Detecting and comparing customer photos for identify verification

#### Step 1: Detecting face image from upload identity card
* Detecting face using object detection technique of the developed model
* Cropping the detected face 

![file5_cmnd](https://user-images.githubusercontent.com/69978820/99877043-a5993900-2bfb-11eb-9859-a7b1ff80ff7f.png)

#### Step 2: Do the same works as in the Step 1 for for uploaded photo of customer

![file6_face](https://user-images.githubusercontent.com/69978820/99877046-a631cf80-2bfb-11eb-931c-ed24932fa6f7.png)

#### Step 3: Comparing the two cropped images to see the similarity and conclude
* Metrics:

  Mean Square Error (MSE)
  
  Structural Similarity Index (SSIM)
  
![file7_compare](https://user-images.githubusercontent.com/69978820/99877047-a631cf80-2bfb-11eb-9f52-cd21c6018537.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)