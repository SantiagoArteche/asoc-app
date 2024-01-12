import { useState } from "react";
export const SpreadSheetPresentacional = ({
  Box,
  Button,
  Link,
  component,
  componentB,
  setComponent,
  setComponentB,
  setDate,
  spreadsheet,
  DeleteForeverIcon,
  CloseIcon,
}) => {
  const [visibility, setVisibility] = useState("none");
  const [buttonVis, setButtonVis] = useState("block");
  return (
    <Box sx={{ minHeight: "84vh", bgcolor: "#08282b" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: 28,
            marginTop: 12,
            marginBottom: 30,
            color: "white",
            fontWeight: "bold",
            marginLeft: 11,
          }}
        >
          {"< Registrar cliente"}
        </Link>
        <Button
          onClick={() => {
            setComponent(component == "" ? "none" : "");
            setComponentB(componentB == "none" ? "" : "none");
          }}
          sx={{
            alignSelf: "center",
            marginBottom: 3,
            fontSize: { lg: 12, xl: 14, xs: 11 },
            backgroundColor: "#185457",
            ":hover": { background: "#a2ede6", color: "black" },
          }}
          variant="contained"
        >
          Cambiar Año De Las Planillas
        </Button>
      </Box>
      <Box>
        <Box
          sx={{
            gap: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Box style={{ display: component }}>
            <Box
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: { lg: 33, xl: 40, xs: 28 },
              }}
            >
              2023
            </Box>

            <Box sx={{ marginTop: 5 }}>
              <Button
                variant="contained"
                onClick={() => setDate(1223)}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Diciembre
              </Button>
            </Box>
          </Box>
          <Box style={{ display: componentB }}>
            <Box
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: { lg: 33, xl: 40, xs: 28 },
              }}
            >
              2024
            </Box>

            <Box
              sx={{
                gap: { lg: 3.5, xl: 5, xs: 3 },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                fontSize: 30,
              }}
            >
              <Button
                variant="contained"
                onClick={() => setDate("0124")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Enero
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0224")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Febrero
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0324")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Marzo
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0424")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Abril
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0524")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Mayo
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0624")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Junio
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0724")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Julio
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0824")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Agosto
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate("0924")}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Septiembre
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate(1024)}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Octubre
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate(1124)}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Noviembre
              </Button>
              <Button
                variant="contained"
                onClick={() => setDate(1224)}
                sx={{
                  fontSize: { lg: 10, xl: 12, xs: 9 },
                  backgroundColor: "#185457",
                  ":hover": { background: "#a2ede6", color: "black" },
                }}
              >
                Diciembre
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          marginTop: 10,

          marginInline: 1,
          marginBottom: 8,
          color: "white",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            DNI
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    paddingX: 1,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.dni}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              fontSize: 18.5,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
            }}
          >
            Nombre
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.nombre}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
            }}
          >
            Apellido
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.apellido}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              fontSize: 18.5,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
            }}
          >
            Grupo Familiar
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.grupoFamiliar}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Dirección
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.direccion != "" ? client.direccion : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Teléfono
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.telefono != "" ? client.telefono : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Mercaderias
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.mercaderias != "" ? client.mercaderias : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", height: "100%" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Prendas
          </Box>
          <Box
            sx={{
              fontSize: 16,
            }}
          >
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                  }}
                  key={client._id}
                >
                  {client.prendas != "" ? client.prendas : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Zapatillas
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.zapatillas != "" ? client.zapatillas : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Microcrédito
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.microCredito != "" ? client.microCredito : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            N° Cuota
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 144,
                  }}
                  key={client._id}
                >
                  {client.numeroCuota != "" ? client.numeroCuota : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Comentarios
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box
                  sx={{
                    borderInline: "2px solid black",
                    borderTop: "1px solid black",
                    borderBottom: "3px solid black",
                    padding: 2,
                    height: 144,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  key={client._id}
                >
                  {client.otros != "" ? client.otros : "-"}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              fontSize: 18.5,
              fontWeight: "bold",
              border: "2px solid black",
              borderBottom: "2px solid black",
              padding: 1,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Fecha
          </Box>
          <Box sx={{ fontSize: 16 }}>
            {spreadsheet.map((client) => {
              return (
                <Box key={client._id}>
                  <Box
                    sx={{
                      borderInline: "2px solid black",
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      padding: 2,
                      height: 144,
                      width: 73.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {client.fecha.slice(5, 10)}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            height: 40,
            textAlign: "center",
            fontSize: { lg: 12, xl: 14, xs: 11 },
            marginBottom: 5,
            backgroundColor: "#185457",
            ":hover": { background: "#a2ede6", color: "black" },
            display: buttonVis,
          }}
          onClick={() => {
            setVisibility("flex");
            setButtonVis("none");
          }}
        >
          Borrar Documento
        </Button>
      </Box>
      <Box></Box>
      <Box
        sx={{
          backgroundColor: "#185457",
          height: { xl: "30rem", lg: "25rem", xs: "20rem" },
          borderRadius: 3,
          position: "fixed",
          left: "37vw",
          top: "25vh",
          display: visibility,
          flexDirection: "column",
          alignItems: "center",
          width: { xl: "30rem", lg: "25rem", xs: "20rem" },
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            marginTop: 3,
            color: "white",
            fontSize: { xl: "40px", lg: "36px", xs: "30px" },
          }}
        >
          Borrar Cliente
        </Box>
        <CloseIcon
          sx={{
            position: "sticky",
            bottom: 510,
            left: 550,
            color: "white",
            fontSize: 30,
            cursor: "pointer",
          }}
          className="closeIcon"
          onClick={() => {
            setVisibility(visibility == "none" ? "flex" : "none");
            setButtonVis("block");
          }}
        />

        {spreadsheet.map((clients) => {
          return (
            <Box
              key={clients._id}
              sx={{
                display: "flex",
                gap: 4,
                backgroundColor: "white",
                borderRadius: 1,
                padding: 2,
                marginBottom: 3,
                width: { xl: "400px", lg: "300px", xs: "200px" },
                fontSize: { xl: "20px", lg: "16px", xs: "12px" },
                alignItems: "center",
              }}
            >
              <Box>{clients.apellido}</Box>
              <Box>{clients.dni}</Box>
              <Box>{clients.fecha.slice(5, 10)}</Box>

              <DeleteForeverIcon
                sx={{
                  cursor: "pointer",
                  fontSize: { xl: "40px", lg: "36px", xs: "30px" },
                }}
                onClick={async () => {
                  const deleteUser = await fetch(
                    "http://localhost:8080/api/clients/deleteClient",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ id: clients._id }),
                    }
                  );

                  if (deleteUser.status == 200) {
                    await deleteUser.json();
                  }
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
