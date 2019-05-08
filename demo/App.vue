<template>
  <div id="app">
    <base-frame>
      <template slot="page">
        <base-page>
          <base-page-header title="Page title">
            <template slot="actions">
              <base-stack spacing="tight">
                <base-stack-item>
                  <base-button type="basic">
                    Basic
                  </base-button>
                </base-stack-item>

                <base-stack-item>
                  <base-button type="primary">
                    Primary
                  </base-button>
                </base-stack-item>

                <base-stack-item>
                  <base-button type="success">
                    Success
                  </base-button>
                </base-stack-item>

                <base-stack-item>
                  <base-button type="warning">
                    Warning
                  </base-button>
                </base-stack-item>

                <base-stack-item>
                  <base-button type="danger">
                    Danger
                  </base-button>
                </base-stack-item>

                <base-stack-item>
                  <base-button type="help">
                    Help
                  </base-button>
                </base-stack-item>
              </base-stack>
            </template>
          </base-page-header>

          <base-page-content>
            <base-layout>
              <base-layout-annotated-section
                v-for="n in 4"
                :key="n"
                title="Annotated title"
              >
                <template slot="description">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </template>

                <template slot="content">
                  <base-card>
                    <base-card-section>
                      <base-text-container>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make a
                          type specimen book. It has survived not only five
                          centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem
                          Ipsum.
                        </p>

                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make a
                          type specimen book. It has survived not only five
                          centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem
                          Ipsum.
                        </p>
                      </base-text-container>
                    </base-card-section>
                  </base-card>
                </template>
              </base-layout-annotated-section>
            </base-layout>
          </base-page-content>
        </base-page>
      </template>
    </base-frame>
  </div>
</template>
