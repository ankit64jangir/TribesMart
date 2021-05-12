import React, { useState } from "react";
import { Card, Row, Col, Modal, Carousel } from "antd";

const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function StateSpecial(props) {
  const [visible, setvisible] = useState(false);
  const [jkvisible, setjkvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
    props.history.push("/GujaratInformation");
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
    props.history.push("/GujaratInformation");
  };


  const jkshowModal = () => {
    setjkvisible(true);
  };

  const jkhandleOk = (e) => {
    console.log(e);
    setjkvisible(false);
    props.history.push("/JKInformation");
  };

  const jkhandleCancel = (e) => {
    console.log(e);
    setjkvisible(false);
    props.history.push("/JKInformation");
  };



  return (
    <div>
      <div style={{ marginLeft: "70px" }}>
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={6}>
            <Card
              onClick={showModal}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://images.adsttc.com/media/images/5bd9/b552/f197/cc45/e900/00d6/medium_jpg/43914221_363966157680449_595145553531016098_n.jpg?1540994380"
                />
              }
            >
              <Meta title="Gujarat State" description="Click to Visit more.." />
            </Card>
            <Modal
              title="Gujarat Tourism"
              centered
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Carousel autoplay>
                <div>
                  <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://www.gujarattourism.com/file-manager/photo-gallery/1515488628-sidisaiyad.jpg"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://www.gujarattourism.com/file-manager/photo-gallery/1515489113-pithorapainting.jpg"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://www.gujarattourism.com/file-manager/photo-gallery/1517814225-sasangir.jpg"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://www.gujarattourism.com/file-manager/photo-gallery/1515489154-ranikivav.jpg"
                    alt="productImage"
                  />
                </div>
              </Carousel>
              <h6>
                Explore Gujarat - the land of Legends and lions! Here is the
                official website of Gujarat tourism which offers details of
                Destinations, Pictures, Videos, Tour planner, Fairs &amp;
                Festivals, Cuisine, Khusbhoo Gujarat Ki campaign
              </h6>
              <p>
                Visit Official Website{" "}
                <a
                  href="https://www.gujarattourism.com/"
                  style={{ color: "blue" }}
                >
                  Click Here
                </a>
              </p>
            </Modal>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
            onClick={jkshowModal}
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1538794473219-b6b18be0a0d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              }
            >
              <Meta title="Jammu and Kashmir" description="Click to Visit more.." />
            </Card>
            <Modal
              title="jammu and kashmir Tourism"
              centered
              visible={jkvisible}
              onOk={jkhandleOk}
              onCancel={jkhandleCancel}
            >
              <Carousel autoplay>
                <div>
                  <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://images.unsplash.com/photo-1560853960-d776c82ffc92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://images.unsplash.com/photo-1566837500831-838ff7486b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="https://images.unsplash.com/photo-1564509180796-129e4f4f6de9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="productImage"
                  />
                </div>
                <div>
                <img
                    style={{ width: "100%", maxHeight: "150px" }}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBoXGBcYGCEYHxsdFxgYGBcXHR0ZHiggGBolHRcVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tKy0tLy0tLy0tLS0tLy0tLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEEQAAIBAgQDBQYEAwcEAgMAAAECEQADBBIhMQVBUSJhcYGRBhMyobHBFELR8FJi4SNTcoKS0vEVM0OyosIW0+L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAxEQACAgECAwcDAwQDAAAAAAAAAQIRAxIhBDFBIlFxgZGh8BNh0TKx4QUUUsEjQvH/2gAMAwEAAhEDEQA/APbi4oDXdar8PxO2+q3FPmPpvTL/ABG0p1uKD41ZYyTmWt1VO4BqKLYU0xcQCJzCOsiPWigI+1xSR0IP0ors8wPfkcm9TbR0quAINHtsRvQnE0ZEm5ZVtxNV9/Bkd4qarnrRgaVScR3FSKZ7RG4IoeWr01W4qxlOm1VhlvZkp463IZWkiikUhFWskCikiiaTHPpQXvoDlLqD0kTRsUdlpMtFy0mWtZqB5a7LRIpIrWageWuy0SK6KNmoHlrstEiuitZqB5aSKJFIa1moZFdFV3EOOWrcgdthyXl4nYfOqG9x28zSDkH8IA+ZO9Ootito10V2Wsr/APkF4CJUnqV29IFL/wBfujUlT3R+mtHSwakafLSEVRYb2jMw6D/Lp9TrV3hsSlwSrA93PzFB2grcXLSFaNlppFazUBK00rR8tNK0UwUAK00rRytNK06YKAFaZlqQVpuWms1GUU0to0xAacqVOwkpGij2WqIBSzQoN0XGH4syR2iR3yR+/Cph9pDHwSfGKz+anBqRwiNrZdtx66SCoCjpvPmftVnhfaUbOsd66/KssbkUNsR09aV4oy6DLI11NVc9pF/Kh8zH61Gve0yndDp/N/SstcvHltQmajHDFCvLJmrve0dofCrHTnpr0/fzqHi+Pswi2uXqTqfLpVCutFmKbTFC6mxCSdfU0sUjGhlzFPqsWi0wvGbiDKIboW5fqKk4Xjrj4wGHUaH9Ko0FEDUGkFWaUcetfzen9aKnGbJ/NHiDWQO9PzUNCDqZt7V9W+FgfAzUW9xW0rFSdRuYkT0051kA1Oz0NCNqNgvErR/8i03E8StIJLg9Apkn0rGF4pmfWtoQNTLjH8bdvh7A7jr5n7VS3mJ3Mk8+frSXH5Vwp1tyM9xAY8q4Gmv086G98DnNGwBF3mluuIqK10xoNKCXJOpogDPiOnrRLZbfMw8DFRV19ak6cjWbCkGfilwEf2jyNBqT5fKrGz7Q3l+Ihu4j/bFZq7eVSZOtNfF5/hkD50rRkzdWPaiyQM8q3cJHlzqfa4rYaIuLr10+u1eWDelzEGloOo9dEHUag86aRXmWB41dtaLcZe7Qj0Iq6wftfdHxqrj/AEn5afKsG0zYkU2Kzw9rlMAWiDzlv0FGb2mX+7b1FHc2x5Bb4peADhzy1k8p017ifWtPwX2ozNku/mKhTAEaazJ5kfWshYEtETodxERuwEiSNezNNFwalRsRvoR0Pfy/Tp5UJyjumXaTPW46UuWoXB8QXsW3ZgzZdSOux/Q+FS7uIA8a9KMrVkDrjRrTVxPcfPSoly9zNcD1prFDm8xrsxPOhTpThcoWEWO+nBdd6Sabn3rWAMFpZoSnlXZtKAQpNIaY93lSo80bMKDSzQ3MU1nogsIDXM3Sg56QNRMFZwKa9zrQjprTGeTQsAUNzpAaC90CgPcY9wrWGySbutDbEdB61HIp9tetZswx3Y1yiufc0y5fVd9/36UbASEfWKj4loJHKopxR15fOkFznGp5/eaF0YNcxpiAIA5/0qHcusdySKJpuB86eiDc6mtqCNS3A8aWYE+FEe+iDtGI699VL8ZGW5oIGWJ/xR5/1qGTPGD3HjBvkWR32pHGtReF4v3oI0BGo75pTjreYrImef77qeGSMlaFcWtgnu53J7qbdfINN/3vUC9xTI3wyZiZ/pUDG49mBUHv6eVTnxEapMeONky/x5htGnOPlQ241eOvvcvcCNKp8LYZzPwxuBuR17/pT7aW4+MDuLCfPtj6VxyzS/yLaV3C9tlghj0JBgH9/Slw2GukrpHKSCB/m0nzii2eDYiZW00MOzqo8fiNPx/C79rKWtsezOhLZdSIaBvpOkjUa1G5RXINM9Awy5baDOCAoEzAMDcUVl56eVefB7hVmRCQkFiCezrAkctau+GccdylpLbXLh7MLqSRry30k114+MT2mqIvG+hpwQ0jpofGAfuKHcvogliB9/Abmg4nhuJ91ccJdtn4iXQqAI5lhoAACdqfwr2Va4Wze+kA6yFzEGB2svPXnVpZa2Q8cN7sZ+MzaIjsfCB6nYVLto2mn3+ZFW/AvYwG0xe2BdIU5HvuQJ3l1G+mwEaVC9uOBthLQe0CCbuVYus/YyEywYfFIGgnffSoyz5EWjggwEtzEeVCZoOtU+Dv3IzXLjKsDsl+5dzA5k+lWNhASYkk7Rz26b1XDmU1bI5sOiWmySL1c1wVSY7jyW7htlGYgSSNY268tRrU7BY9bih1Eqe4b8wfSnjmhKWlcyDTSJgaie9FAOIAiB9v+aGcQOnrVAEosaGzUA3pHOd9OkxXB61mDZqT3g6imG0YnlPpQmcDT6UuqwJpjrl397fWmwYoTmTIBri58PGjbMHRaE7axQiTmB5zyFcV5wTWTQXyCmudwBqajtd8fSgNcmdaxh16/O2lDdtP1/rTGam5u8D9+NMAbmpN+dcRzkH5fem+nqKawhYPXzogvf8ANRDilzBZE+O1HgdZ8AfvU1OL2DTRX8euD3cmTqPlPpVEjKbbiSJyjUTEEtE+MVO4liZYCZBkRy07umtSMPwhrxYLbUL2dcyrB1JnM0j8tcOWWqVnVjg0iBwbF+7aTryIHTw59aJfu5mLRHWJ58tTtpReIWzaJtqVJ0krJjRp1IHdtVh7O8KN1PfFnIDZcoUEzo0lswaII2GkUic2qQVFWUKrprPr+lRvfrMHteOg+W5762o4Krdv8BcuKSRrcayRse0rNOx5c1bwrn4RhWBDYZLF5jGR7t4tB5qEzKTOwgj6U0cb6jUZPVlDrAExE7kch3xFQrl5Z2rcj2fwvu1QsbcMc2ZyZYgbEIeQj4RNBPsrZP5Ce83Vn/0pVQ8cbZfY38R7xVtXQUIWT2RBlc2kg7ZufIVKxV9AxttiGXsgqc6qTMDxPPu0rEYrgtouO20aEwABryy7VMt8NtoYDAiAZNsEzI5xXDk1dGzquP8AivU1lnhuFzOhuLkYatmTtbHKeZ1k66aUE4KyEK2XC3e0LQzqQCyzmgab9d6g4bhm4DsF3nL4bRt/zTLvCne1lz3Msx2ZGgX6VKCm3u36MKlFO1FexZ4fAYsMS+IEEtlWU1XNoNhPZ1q7wl+9t70sDKrsB2SQeWo03rzq17Ehd7jneZQHlGkz1q/4XwJQuQXXAiDlAXQbRlG+1ehBOMuy78qIzepdpV5lzi7uKGHuopbOwtkMDBXJcEwAuumaZ5VlOJY7FWiFvYm6rRMExpJE7dxq9s+zAfM/vbikBY1jXMencKrfaj2dKZWVi5kj4ZYc5kbDQetNl1Vscksae6b9SPhsa9/CYuy1x3z+4Cs5LZSt3McoY6zAnan8Px2Z1UOXaAqHLGbKAq6sYUDTc8qJwvC3Bh76tn3tFAQRu/a056RTbfCgzQ6krMkGY5Hr400Ize8UjbRpSbfiQeN+zK3L0pck5c7lZdcizMaA5hp48pqZgsJlUi2LhVVUaoZOaSCBE6ZWkxpp1EuvPftOUsFwkEgfFBMkmW13JPnVthsdfKLnZiwIInkRpNNHHk1NoWbgQ8OjEhYuByQFPuDEkx2maIHfUHiFp+0mHZlhQzM6xALAR6snLn3E1ov+pXZ1dt+ppp4lfAIW422mpMSQSfr61RwytU2InAx9i1cVw1zECHSVUnKIDFSdf5lIjxqel24Bm95MEA9lm7fTQyRAcztpvqK0gxy3C4xGIYG4pAthGY5VYEtmOi/Eog7699BGNwqXHtKuIYwrsS6quwKiVkgw4PnXLPJkTcFFvya93S9yqxprVe3zuIuBxY0De9MZmbs6QF1B20ESI1151D/Cs7DLdUZiSuaUAnUZiwAHLcxV1iOMpbTOtpVMxLM934iByYcz5VCfEtcIN0AhlAZZkQRJGpkiSarillbaca8f4sEscFFS6ctiufA3+1LbAk9logELKnLBGYjVeRnah4e22aGLxLDsgbIAWaGI0AM7cj0q6/6xeUmGMDbugiOVAbid1mBZ7mhYiGjUgjkO81drJ9iXYsq7mHU3FS3dZpkCVI7XLbQT31Y2+A4goIAaDruBpmgBuehk7ct6I3ECFy5mJzE6knbLGYltRvpA158qj2r41zLbJJOyDYgiDJM7n1rQc7qSDpjS3+e4DFcPu2zlaFMSBmLb9NO75UI2rnMpoOebp4fKi4u9LSOgGgj6UE3j1PrVIrbfmJKr25DMPgGd4zoOupBjqJGvhvUi5aAXs3lMRup135ldPvPdQLOKIaTrGonWCNiOhof4hoiTHStW5rVFgmFutbBR8wkjQRBIkrmPXpQLPDLxG6an++tgk+BeeY9aPb4y3uwGCkhtCROgWI1pp4rm0YAg7iIB1B2B7h6VJ/V7l6v8HRpw0rb+eZWN7J3QczEQzMSwZSoBXsgwfiJ057jaDTsFw97Zgq1wHVsrgMpyhTEghiGJMAciDIE1IuY5QsKoB2kZgYEHfNrr1peHOgZpkgq/xMTqVEQSZU7drlFc1TSuvT+Ui0Y4X19f/SY/s5ZORcnuypNwPey/2hOwBUwVA0juEiTQLXBLbOyXbtqABHuwNz+UNrpE5t4gcppeLQt61Lu5ls1xWdmEbEEz2p6jrqDBpuIto14vcJMqvadc8mI3YHXw76WOSUtnF/PA6NEI7xZWcU9krtq4ww498FUsSEiND2QxOujRpH1FaHC4TE4YLbuB5IAVrKM8KGZoYqsAzcbTfQcgKruPY20pa2CrKttgJQGc2pXaIMa+JqccJbZFyXGI2iBHxE7EagGSOhp8bnfZW/iSnDHXMmXsLi2NoOpdFYs+YhoE5QTodSs6GIJOnOq63wfMVttZUKEBn8oN3P7y2GL5WOsQABInpXWuHH3mt5yGzgEnXYgiVjQid57oNLhFAgC4RDZxqRvHOe1sQQ0iqTnK94v2NCEOkiIMBiLeZA9okBQqkKQR7tFZnmcoDKsAiYAIPRuPwLvcZgcO0xqxsgkgAEw4LCSDuTSYqIuGVY76rzbWdOes1PsYlwqj34SAOxlLZdNpMmqQyTS2RNwi3u/3MOMSJPl+9KlNi5I21j18Kplfxo6zoYMdfr41xabBrNvg8UQp32nTbvPdUjAcRDLbOYw7QOUmCY112Vj5VFsArZBEZokBuZOyjqT0FL7P4T3rItqyxZQzqupYDQTB1kKdzr2yOevQoU0gQbacu40WCwFy9ITQSQWOw/U91aSxwawi/mYxBJJ18gYFYdsRcAhblwDaFdlA5nQGKq+N3sRCMt+4CWCHNcJUTMN25B2fbU5apKDW4IzUtj1K1hrajRIHT9ZoWKXDn/uC0QDPbK79dedeai7g9TdZXJg9slhoNdJIHLYAVV8LwFu57y8baKLjkKgjKqoABlyiJOsnuPmlO6HUlVm/9p/aDD4S1Fi1buXrihkRFBUKfhuPl/LzAGrHbSSKTh+Nt31N1R7t0gXLZmJOgZG2Yd24obwLNsiBukCN0Jblt2bijyouDAFi8QBGe1t3i7PmaMMTXave/iFnli+xXQiYu6C57I23ipdi6uUafaoTjU/rRVbTeupLc42yfh8SVIyyNRzgd07z6VerjLZH9patHvUBT5mKymenm+etFqzJkrij4VsVYM3bRAIi2QUZcwkPmBjWNoot25hyWbNcS6WGbLBGgAXstM9mOdQ7KW2OZxLAEA5iIBKmND3DWuv4JTcZtBIGoMTAAn5AVzynU6o6sf6Nn83LnEWsI9se8d4za6xy2308jUu5+FAXIswBA94VEctwx2jnWV4jg5tkAyZ0Gh+vLemW7rAKCZhQN52A9aMGpT27hJ7Q37ywxWO7TAKqidNSx26zr6Cor4w9frUVrlDZq6DnbJLYkyNf36Uy5iCedAmrHhHAb+JYC2mh/MdB4jr5ULo1XyIbFjypjV6bwn2FsJ8Y9843LaKD0CjfzJrQYHCWVlbaAHuA+usCpvIVWJ9Tw0r3TTGnofSvbuM8DsXkPvLSEwe18LCBOjLB8q8QdzA7bfOjGeoWcNI2dNjTM1crH+8+p+1O98f7z7famsFAm8DU3h2De62W2pJ59AOpPKrDguBa/vlCA9p9jy0GwJ+n12PDzhrShVuW11/i26sY1JoxjtcuQ6jfIHwHgV62h7QIZ1fbQ+7IJEQS23KKb7R+zly+gU3VGXtDsRyOwIUx3ydq0WH4jZfRL1pvynTl1nr371Hxt0FmKkRtEDlzBAiP1owhrdVt5lW9J47x3gl6wxLgFTswkjwOmh7j5UTh98C3E8/91b72ow+fD3R/IT0+HtD5gV5QtxkJAbadJqGfGsMtuRoy1czQW8UOzqdM33oDYgAAzy+9VKYk8zqBt+9KBfxgywDUNdlFsXHvexvM/wC1aFexZLHWq38WAqjNtPXoB5UD38/+RfPNWU6CqJdvgV0qWGS4Bp2WzMfBQZ074qTb9nnkqMrONSodSR3ZQ+YHypbGA2dHSdyFVrh8xkPzNTcJgJbMUIE/3AQeJhgT6UYwI2XF1Tbs9u25VRDDIduc7/PSqPCe1eKtgphvfG0ZL22GddQA0RqqnTmOVXPELP8AYsoZVDCNM/npqD86oeAXRbKETNyV2+GNd9dNOdNmhraVlMGTQm6JL+2LSma0LYE6WxknSOanbx50K97QLdJzgMCIAJ1ESAdCBm1Osc6v8Vh1vLkd3K/yoCB3SRWW4xwH3dxVQ6P8JYEciTsCeQ2HPlXHn4acY0nsd2Di8cp6pRVhGt23dSS1tcwLwJJUbhehPfI8Kt8FxjD2CRZwqZOt24zsx6kHsLttB8RWXw/CyzESVUGM2Vj47CkTB3SGe2zMixLK0jUaD7VN/wBwlz9tyqfCyly8r2PTuCe3SZiL9u2ixobYMSORUkxvvUninGcHfRlthFLFZYj3eqhobQdsjMdD17q8rwGEvXmyqxmJ1nl5Gm8Q9m8SpgtcO2zEjw5a0kJ5usvOg5YcP0j5WbUYZR8V+yP8x+mXWh37gEKmZurGFXfkD2iR0I571muG8Qv2GCX7JymBmVQpjqRl7Q05R41qsNibdwdhUcRyUAj0cfSvWxSct9V+Vfk8XLFR2Ua87I7vTc9Eu2WO1sAeOvzahBgDlcAHrBP0YV0EAljMZyjx0mjJn+EDflt+x30ezhFIkMD4Kp/+tEfhaxHqf3oPSs0FEd7DyQRHPu9dqjXBB1PpB+9SzwyIMyOmxp12yQ4JHgNfsI+dZRozdle3+EeU/rQjM7fKrJbFwmR7tQeoJ9Wy/eo5wzydEHzB8CRp8qwKHYK9aQM7qWZdly5l6zyB6QTHUNtXYP2zvYhPeDs6lcpY6RtouVNiNlFL+DYCYkgbQp9DmJPoKx/CuImzmBVCrnMpiY5aa6DQd+hrkzaYyTnyO3BCcsctC3Ve5fcS9tb1lxbtuM8EkAMJEaaqw6da2Hs77W4rMlvLqwDMH7QAiSSWOeOhzxroDNedpj0N8Xnto5VPdqhXsgEkzlDDMZYnX+LbQVe3va5nENbUA9liqPJAklJDfDImBB79653lxb/6susWRpLr5G09ofbtGDYa2re/Ktn0MKqoSSrR2sxhZjSe6vPT3fuKT2cxZa6cROa6QUUNPSQNvzBG5adNKsksficT7q2iWlCZi+VgSZICFAYXQEyP4TTQ4mME3Lkuv5DxHBvZde705FWooYiddp1jeOfnVniODujFWygjvnw216UNuHx3ju/qRXeu1G1yZ5j2dMruO8avBUFsi0BIEAEiAD8TgxOuojUgmpOKxF9kY+8uxEkh2OkidiSNPOqzj1gEgbKuVi08nLA+hUf6hRMJxq2qKr2tAsBgwOy966GOU15+VYsc3qhd+Dfu7O/FDLkgnGXJ+C7y49nGfEPYtm9cKtEktmLZBqBnkSSN++tl7RWfw1hcVhixtllDW9igaYK6Fd4EFTvvWIwXtSlsZbbXEGpIAU7sTzYkamYjl3Va3vauxcwow7PcRZGoU9oLMqcyEdPSkjPh0trT70pJ+qKSxcRv1X3af7l1guNpeTK4OoAYFSNG7JB9TtM76aVheK4N7NxrTkSNjG4Ozan961P4ljcuHa7YaGRVuKY5AKBAMSsBuWzVobmO/FWFupkzFMy5hPZkA2yZjONRvrl76vPL2lqla5eHjyJQxOeN1Gmt/E88ZSNmHfH9AZqFigdyQf3/AIRW1fBiQGNtT/AwQb7QATIpTwtYIdUjkQQpPKOzbEDzNUeI51Iw6Pyhe6Bmnw1/cUpvEae5TzTWteOB2CDCpJ3EyfCXEAf4ah3+DsGOVso5AWyY8xvUnjaH1GjGA1/O86km2bXnoAT40X8GAQAoPe1xI8hcYk+grWW8HoQVJP8AN/8A2Cx9Ki3cL2hGUgctWju7I0q6kBxKUWAQYtrP+BCPWYNFt4C7pluARrCp3ajeKuPwwMEg+SqP/aCKMMMIjKI30IP1X70zYEigThl8Zm95lMzIDCfGFAms77V4C45Qm7BQyCyz00kPm5VvDhramTAH+KPvU0WQRpJHfqPvST3DFHgGJN62+hVzP5QxjodQGBqTwbHYlGMo7KR2gyEyB3kfevacdwVSrM1qdORU/KAOdZLiPscjLnFoQDGpBPkPcn5E1NRY7oHgfaXDoASEtlhs0Awp30ncz4xvVlgsXbxBc2rgk7nKFnLynKJ+IbGe8VkuJeyVwhCmgVMuqsSdSRuqgb76b91aP2Z4TdtD+3feTlDtpJBO+oMgagmmx3dJAnVW2T3wLFCGcd8az10JNVo4GqXA8QQQRqRtt2QAtaR8IpMy097T9TQbtgDcn5n9fpXV9ON3Rz6nVFe/eq+cfehnEAEA6E7Qw18INTVw4kwJ8wfllB+dMaws9rKAObAafMxTiCQejef9aREk6Bp7lB+9FS4s6If9IP6GnriFJgjyIM+jfrRMDbBXDqZjfaPmCfpTEwqgkh5PewMfIGjXr2aDCr4mD6KxomRiJJPj2f8AaZ9a1GI5uqvZJ16BxPodfOhuRoSCOhIMH/MOyPOKnFOW46kz8iKiXrKqC2WI1OU5Tp4aHwNZ7KzLcjXmEEnf15bAEAHTvHnXneCwhfKRKHadNZE6c9zr3ivRcZh89tiHZVZTBUqSykSIPvIHPf71QNgVdmYNctc/+ytyZJ292hj/AFNvvpXHPLw/1IfVe2/P9vncd+GGZYsihG267n5lfb4Y8rD9oaT11O8mBoY6UPG2HVCS+nPsiY/hG1W44M51F5z44cKfDthalW+GKg/tSGAH5gqj0UEkf5l8q2fjP6PFPZN/a7/cSHB/1CUk2vWkUPBbIADq0C2CWG6n8o15NFw6GdVPgbDgeDyXDcL5pbNC6DQALsSd9aqOK8SSQmHVVUsC2RcoJB7tW8STvvrU7h16WuBrmXK5M/DIIBGziNyPKuXg4xyXae/k+p1cfmlar89xY4oF3Z1IBJJ7Rj5EEfKmBmiSW0/hZB/9dRRFvZtFulo6M1zyITMT4RUjhiq19BeUi1MlzbyxpK6liRLQNp8K9SowjtyR5bbk9xi8DGJSbjmW7JHZYQrqwIgDmpGvU0G97AWzMXSAeqyOXRh3jz8I1+Jw1u4ytZxNlViAuVTPMQT5aCgXsLeSP7axHLMSu2+zipv6LVzr1/kVZOIi6ha8jIJ7BsDK3UMaDMjiI0MFbm3iDQn9gruwcBf5XnnqYZBG06Ny51rjir429w/hey+famhHiwyMXyjT8j5x3y2QKPLMe6oZXwUY22l4O3/svjy8c3Sv0r8Gb4lhHNjE28mr5yFGUkKqhLcRJ+FBtBBJqk9l0xGHL/2bCUJhhGYpqqAkbsJFaTgLtiQ93aXIAg7aBQDPIQNt6slwOurCR1f7FTWeFZsabfxl4cQ8M6S+LYVMOXGhOU65LgAOuuoBB7ojlRETXLngxplB18AXmPKKLYwNuJDE6kcvlp+5qR7pBoXPhMa6dInlXSoUqOVyttkRsCCCQ2v8wtj5m20U0YJ+7yuJ/wDpqyZtNs37+dAYifgH+kVtILNA/u9lKgj8ywxHmVio7MSTDZ+4ldPAKB9aeb6M2UukjZcxY+ikRSfiQ2kbdx/UxUEi7Yy4oEaLP8RE/wDrE+tPZWAkuvhGUehM/OhLcJaCH7iXAH/wOvmKcuCQkkhvEmfPQ/WmFGG4AQbhyDluAe/Xf1ogxRb/ALZaObDs+rNv50hS0QSmViNNArevQ+MVFGIQaMI/waep2/8AmKZKxW6JuIxWw7LFdixzR5oNaGQbhlu2eiyQP9K9n0qObiyCFhe4FyfA9tR5Go73CZJygdGaT5CTHpTqArmHx+ALL2mAXmoK/ImXG3dQ7AVVCAnzYk+pJJoC4hToAvexn6E/QU0XZBI+Ebs0KPLMRPpTrHW4jnZNVo7vX70hvf8AOgqu98DqNe/T5V2Y9APHc+Q2qmkSyZcYnYj99IoNxRu2veQD8wJoJfw/fU/am5/AeU/ajpNZMW9pp+lJ76NJHl/xUP3s8yfL7mu/EqOY8hWoFklm00/T5g/rXeBk+JNRDjR/F8/60xsb3nyI/SjRrJxfrv8AvqKDdvfvSoZxfcfPX6CgXsVPT/VH6UaNZifbTh1jDZXsylx2JygwAN2IgSupGgMa6CqDCe0eJtfBdYDpM+vWp/tpis+IyjZFC9RJ7RjUzuB5VQZK8jiIwlNqlR34pNRTNFa9usXzKt/lj5iuPFr+K0fRJEhdBpOuoMmqXBYQ3GCjzrQ4lhaTKu4HUCvOnjxY5LRFavA7oTyTTc5OvFncMCrcUKM3aGm5I/N1nSTWn4JiimIuMUKK6qAsgiVkaZmkad0aVkuD3Cblo/F21Eb7yBPnFei27X85EHkPtGv1r1OBx7N/c4+Mmk6XcJieJXCZtyBzzJPpDx8qhYy2XBzZz4Qo130j71Y5Y1zGeu30/SoHFr5S27E7AwOpOg18SK9JpVbOBN3sedf9avYe4ypfu9kkSHMHvykkVZYD2xQf97D23/mCKD6RB+VZa8JYnvP1pgt14eTDjmmmuZ6kMso8menYb2rwWWVKqRyKQdPAa+VV2P429+YlbfKd27+4dBzrJcIwWd5IkLr4nkKusbickeI5d4+0/KvM/s8MMqUd39+h1/3E5Y237dS74Xi3tYPEmShU9lu94HLUwYqHgfaG7EPlcGddj3mJE9dKiXcYwwF1WM5roCzrMnN4bLNROD4F7rGLe4AHhpJ17gfWvZk5wUYp9Dz4qM22ze4DGlrYZcwkc2KztoMxMdOmgqwOJUAZnluSwJ7h2R86jYfDoiC2B2QIpzgRzHgSPmNa9KONpHE5K9iTdx5AkLm74gaab/0pq4tjuh+RqOLg1n13+tJK8xJ6wP0ptANRobd9AxSbObnlA67EzJPpU33g2C+Ecv331g8NiVDQmZR/FIzH/Ucq+QrQ4LHpbHxG4+wTsux5xKCY7yYFRnjopGdlsl6CWZkUdWb/AIE+Bp9m+rKSl20qj4mzhj5gQq+OtUt7B2lPvcSI7gSwE6wSZa4fRabZ4zJOW8Utj+FbamOUBiSfIAUui+QdVcyzxGI7MWmvXOpRIH+rKoPkarXDAZvdXTH5nePrJPlFSMPxPDqhutiLzHUhHuQSRsIt7T31ncVxP3rl2YTyAGgHIDSq40yc2i0um5o1xQegNwMfTMSBSSW1yBQOQk/+x+9VRxM/+Q+QNc9yepH8xq1ErLU3Bu7dnkvvFWfJZIoTXFbtFRlGwALD1Y1X++A2MeQX5xNI+IB5Zu8gt9SBRo1licTzJUdAYAHkKT8SOR33P7Wq04kDp8gPRR96GcUTrv5feD9aNC2WZu95/fiaaST+b0E/Miq38SeQEeP9aX3rfuT9KJrLAnqzH/MfoK5TGgBHn+gJqv8AxDbTH76RSe9nofFf0IrGsshcG2bXoBJ/X5U1ro/ijz1+1QDe5GI5AEgem3ypwujkvmWn6igYlFwPzH1n9CKY+IXlmJ/xUJSOevmfsBTb92FMZRodyfuwisE874pfNy67mJJ2Go003G+29RUtkmBvStcJJJMkmZ7zzqz4PgWaXyFiPh6Tzn5V4Mm3y3Z6UUuRMQDD2xBGYiTrPppVNevlmmKscThb1wkspUCBB03POTHzoS8Jf8wI7gAxGsarIMd8Gp48Mlu1uy2TLF9lckP9nyTeVQSNQSR0BE/KR516N+J/pNZj2ewmQMSmUnQayWA56qI1J07quQ46etezwmPRC31PNzz1S8CY14nnPgB+lUntRcIsc/iHKOp667VPNwVSe1U+6Gmzb6cwR51TiX/xSruFxfrRiglcFokVN4XhpOc/Cv1rxJT0qz0Ixt0WuCte7tgCNdSSdNfKo90yddQZMANt10mAI30FB4hiC5yggeJioduy3xAhZ31j56/WpYMe+t8yuWf/AFRMQl1ybZnE9oFWAnLqPzcp6eNbLguAWwCQup35x8qyfs5m96pZSVE9rodxJ+XnWzGJjQiDyPI16/DQUu2zgyzcVpRLN08qab5qM1/u17tqE18Gu6zmJZu03PUM3e/6frTffd/0/wB1azDCFCiBBO7OwHoo1A79assFct7KznqmGRlnvZ3hiO7aurqlLkNHmCvXbTZwtu3bI1L3LjOxjkIJE92tRrOJSZuKW6AEWx5wv0iurqKWwLGXMQHYmUQdFBbwAk/els3hrMbbmSfILzPfXV1MKJ+Kjl66fTWlGL7h9PrqfSurqzAKmJPPT99SB8qV7mn9P1FLXUQgWvgax6/0NMOMPj5frrS11FMDFzsfy+bVxcfmae4V1dRAcLwGy+ZpTiOremn0pK6tZhPxI5etNN+urqFmO9730zFJnRlnQiP+a6uoPdUwp0ymscFVfiUsSNNRoefKB86s+E4U257TAEzBII8dB+4rq6ow4eEXaKSzSaonPbDbsfX9dqDYwgU75um2nhlGnlFdXVTQrsTU6JXvD1imlz/XeurqZAFz9TVb7QtmsmJIBBPhqJ+ddXVPKrxyX2HxupIyVqzmMDU+v0q+wvC2C6CNN9JMzsJ0jviurq8zBgjk/UduTI4cgV/g4iSYPVmg+mU6d4MVzcMAjMM3SSPnAk/Ourq6VhhbVcqJfUlVljw0ZDzykbEmO6AdftU/3wiIBHTSPSNK6ursgqVHPN27Bm8v8I/flTWu/v8A4rq6tYBDf7/n/Wu/FH+b1H611dWCf//Z"
                    alt="productImage"
                  />
                </div>
              </Carousel>
              <h6>
              Kashmir has four distinct seasons, each with its own peculiar character and ...
                                    The valley appears painted with myriad colours with different hues spread all over.
              </h6>
              <p>
                Visit Official Website{" "}
                <a
                  href="http://www.jktourism.jk.gov.in/"
                  style={{ color: "blue" }}
                >
                  Click Here
                </a>
              </p>
            </Modal>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="data:image/jpeg;base64,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"
                />
              }
            >
              <Meta title="Uttarakhand" description="Click to Visit more.." />
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1550499190-1b823e9650ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
              }
            >
              <Meta title="Rajasthan" description="Click to Visit more.." />
            </Card>
          </Col>
        </Row>
      </div>

      
    </div>
  );
}

export default StateSpecial;
