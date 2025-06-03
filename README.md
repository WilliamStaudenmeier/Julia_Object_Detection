# Object Detection using Julia

Requires Julia v1.10+. From the Julia REPL, type ] to enter the PKG REPL mode and run:

```pkg> add ObjectDetector```

To use CUDA accelleration, you will also need to add CUDA and cuDNN to your project and load both packages.

## Loading and running an image

```using ObjectDetector, FileIO, ImageIO

yolomod = YOLO.v3_608_COCO(batch=1, silent=true) # Load the YOLOv3-tiny model pretrained on COCO, with a batch size of 1

batch = emptybatch(yolomod) # Create a batch object. Automatically uses the GPU if available

img = load(joinpath(dirname(dirname(pathof(ObjectDetector))),"test","images","dog-cycle-car.png"))

batch[:,:,:,1], padding = prepare_image(img, yolomod) # Send resized image to the batch

res = yolomod(batch, detect_thresh=0.5, overlap_thresh=0.8) # Run the model on the length-1 batch

# The result structure
i = 1 # take the first result
bbox = res[1:4, i]
objectness_score = res[5, i]
selected_class_confidence = res[end-2, i]
selected_class_id = res[end-1, i]
batch_id = res[end, i] ```
