class Api::V1::TestsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
    start_ups = StartUp.all
    render json: start_ups
    end

    def create
        test = StartUp.new(start_up_params)
        if test.save
            render json: test
        else
            render json: { error: test.errors.messages}, status: 422
        end
    end

    def show
        test = StartUp.find(id = params[:id])
        render json: test
    end

    def update
        test = StartUp.find(id = params[:id])
        test.update(start_up_params)
    end

    def destroy
        test = StartUp.find(id = params[:id])

        if test.destroy
          head :no_content
        else
          render json: {error: test.errors.messages}, status: 422
        end
      end
    private

    def start_up_params
        params.require(:test).permit(:Secteur, :Nom, :Log, :Fondateur1, :Fondateur2, :Fondateur3, :Fondateur4, :NombreDeCollaborateurs, :Email, :SiteWeb, :Pitch, :BaseLine)
    end
end
