export const SpreadSheetPresentacional = ({
  Box,
  Button,
  Link,
  component,
  componentB,
  setDate,
  spreadsheet,
  DeleteForeverIcon,
  CloseIcon,
  setErase,
  erase,
  setButtonVis,
  buttonVis,
  visibility,
  setVisibility,
  changeComponents,
  dateBChange,
  dateB,
}) => {
  return (
    <Box sx={{ minHeight: "85vh", bgcolor: "#08282b" }}>
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
            changeComponents();
            dateBChange();
          }}
          sx={{
            alignSelf: "center",
            marginBottom: 3,
            fontSize: { lg: 12, xl: 15, xs: 11 },
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
            marginInline: 0.8,
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
                  fontSize: { xs: 10, md: 12, lg: 13 },
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
      {spreadsheet.length === 0 && (
        <Box
          sx={{
            textAlign: "center",
            marginTop: dateB.includes("23") ? { xs: 20 } : { xs: 15, sm: 20 },
            paddingBottom: dateB.includes("23")
              ? { xs: 20 }
              : { xs: 15, sm: 0 },
            marginInline: 8,
            fontSize: { xs: 23, sm: 28, md: 35 },
            color: "white",
          }}
        >
          {`Selecciona uno de los botones de arriba para traer la plantilla con su
        respectivo año y mes (Recuerda que los clientes se registran con la fecha del día actual)`}
        </Box>
      )}

      {spreadsheet?.length !== 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: innerWidth < 1300 ? "start" : "center",
            marginTop: 10,
            overflow: "auto",
            marginBottom: 8,
            marginInline: 1,
            color: "white",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                fontSize: { md: 14, lg: 16 },
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

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Dirección
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Teléfono
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Mercaderias
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Prendas
            </Box>

            <Box
              sx={{
                fontSize: { lg: 12, xl: 14 },
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
                fontSize: { md: 14, lg: 16 },
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
              Zapatillas
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Microcrédito
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              N° Cuota
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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
              Comentarios
            </Box>

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                fontSize: { md: 14, lg: 16 },
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

            <Box sx={{ fontSize: { lg: 12, xl: 14 } }}>
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
                      {`${client.fecha[8]}${client.fecha[9]}${client.fecha[7]}${client.fecha[5]}${client.fecha[6]}`}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}

      {spreadsheet?.length !== 0 && (
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
      )}

      {spreadsheet?.length !== 0 && (
        <Box sx={{ position: "absolute", height: 0, width: 0 }}>
          <Box
            sx={{
              backgroundColor: "#185457",
              minHeight: { xl: "26rem", sm: "23rem", xs: "19rem" },
              borderRadius: 3,
              position: "relative",
              left: { xs: "10vw", sm: "27vw", md: "37vw" },
              top: "-64vh",
              display: visibility,
              flexDirection: "column",
              alignItems: "center",
              width: { xl: "30rem", sm: "25rem", xs: "85vw" },
              overflow: "auto",
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
                    fontSize: { xl: "20px", lg: "16px", xs: "12px" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>{clients.apellido}</Box>
                  <Box>{clients.dni}</Box>
                  <Box>{`${clients.fecha[8]}${clients.fecha[9]}${clients.fecha[7]}${clients.fecha[5]}${clients.fecha[6]}`}</Box>

                  <DeleteForeverIcon
                    sx={{
                      cursor: "pointer",
                      fontSize: { xl: "40px", lg: "36px", xs: "30px" },
                      alignSelf: "end",
                    }}
                    onClick={async () => {
                      const deleteUser = await fetch(
                        "https://asociation-copy-api.vercel.app/api/clients/deleteClient",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ id: clients._id }),
                        }
                      );

                      if (deleteUser.status === 200) {
                        await deleteUser.json();
                        setErase(erase === false ? true : false);
                      }
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};
